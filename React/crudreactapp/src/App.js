import { useEffect, useState } from 'react';
import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';
import './App.css';

const AppToaster=Toaster.create({
  position : 'top'
})

function App() {
  const[ user,setUser]=useState([]);
  const[newName, setNewName]=useState([]);
  const[newEmail, setNewEmail]=useState([]);
  const[newWebsite, setNewWebsite]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((json)=> setUser(json))
  },[])
  function addUser(){
    const name=newName.trim();
    const email=newEmail.trim();
    const website=newWebsite.trim();
    if(name && email && website){
      fetch('https://jsonplaceholder.typicode.com/users',
      {
      method:'POST',
      body:JSON.stringify({
        name,
        email,
        website
      }),
      headers:{
        'Content-Type':'application/json; charset=UTF-8'
      }
    }
      ).then((response)=> response.json())
      .then(data =>{
      setUser([...user, data]); 
      AppToaster.show({
        message:'user Add Successfully',
        intent: 'success',
        timeout: 3000
      })
      setNewName('');
      setNewEmail('');
      setNewWebsite('');
    }
      )
    }
  }
  function onChangeHandler(id,key,value){
    setUser((users) =>{
      return users.map(user => { 
       return user.id === id ? {...user , [key]:value } : user
      })
    })
  }
  function updateUser(id){
      const users=user.find((user)=> user.id === id)
      fetch(`https://jsonplaceholder.typicode.com/users/10`,
      {
      method:'PUT',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json; charset=UTF-8'
      }
    }
      ).then((response)=> response.json())
      .then(data =>{
      AppToaster.show({
        message:'user Updated Successfully',
        intent: 'success',
        timeout: 3000
      })
    }
      )
  }
  function deleteUser(id){
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
    {
    method:'DELETE',
    })
    .then((response)=> response.json())
    .then(data =>{
      setUser((user)=>{
        return user.filter(user => user.id !==id)
      })
    AppToaster.show({
      message:'user Deleted Successfully',
      intent: 'success',
      timeout: 3000
      })
    })
  }
  return (
    <div className="bp4-html-table modifier">
      <table>
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
        <th>Action</th>
        </thead>
        <tbody>
          {user.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><EditableText value={user.name} onChange={value => onChangeHandler( user.id, 'name', value)}/></td>
              <td><EditableText value={user.email} onChange={value => onChangeHandler( user.id, 'email', value)} /></td>
              <td><EditableText value={user.website} onChange={value => onChangeHandler( user.id, 'website', value)}/></td>
              <td><Button intent='primary'onClick={()=> updateUser()}>Update</Button>
              <Button intent='danger' onClick={()=> deleteUser(user.id)}>Delete</Button></td>
              </tr>

          )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><InputGroup value={newName} onChange={(e)=> setNewName(e.target.value)} placeholder='Enter Name ...'/></td>
            <td><InputGroup value={newEmail} onChange={(e)=> setNewEmail(e.target.value)} placeholder='Enter Email ...'/></td>
            <td><InputGroup value={newWebsite} onChange={(e)=> setNewWebsite(e.target.value)} placeholder='Enter Website ...'/></td>
            <td><Button intent='success'onClick={addUser}> Add User </Button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
