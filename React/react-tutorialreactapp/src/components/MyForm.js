import { useState } from "react";

function MyForm(){
    //  const [ name, setName]=useState("");
    // const [ age, setAge]=useState("");
    //  const [ email, setEmail]=useState("");
    // console.log('Current State', name);
     const [input, setInput]=useState({});
    function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted');
        // console.log('current State', name,age,email);
        console.log('current State',input);
    }
    function handlechange(e){
        const name=e.target.name;
        const value=e.target.value;
        setInput((previousState)=> {return{...previousState, [name]:value}})
    }
    return<>
    <form onSubmit={handleSubmit}>
        <label>Enter Your Name</label><br/>
        <input type="text" name="name" onChange={handlechange}/><br/>
        <label>Enter Your Age:</label><br/>
        <input type="text" name="age" onChange={handlechange}/><br/>
        <label>Enter Your Email</label><br/>
        <input type="text" name="email" onChange={handlechange}/><br/>
        <input type='submit' value="Submit Form" />
    </form>
    </>
}

export default MyForm;