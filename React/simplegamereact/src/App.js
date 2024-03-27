// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Result from './Result';
const secretNum=Math.floor((Math.random()*10)+1);


function App() {
  const[ term, setTerm]=useState("");
  const handleChange=(e)=>{
    setTerm(e.target.value);
  }
  return (
    <div className="container">
      <div className='head'>
      <label htmlFor='term'>Guess The Number between 1 to 10 </label>
      </div>
      <input type='text' id='term' name='term' onChange={handleChange}/>
      <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
