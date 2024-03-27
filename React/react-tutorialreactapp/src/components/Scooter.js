import { useState } from "react";

function Scooter(){
    // const [color, setColor]=useState('Red');
    // const [brand, setBrand]=useState('Honda');
    // const [model, setModel]=useState('Activa 6G');
    // const [year, setYear]=useState('2020');
    const[scooter, setScooter]=useState({
        color:'Red',
        brand:'Honda',
        model:'Activa 6G',
        year:'2020'
    });
    function updateColor (){
        setScooter((previousState)=>{
            return {...previousState, color:'Blue',brand:'Hero Honda'}
        });
    }
    return<>
        <h1>My Scooter</h1>
        {/* <p onClick={()=> setColor('blue')}>Color:{color}</p>
        <p onClick={()=> setBrand('Hero') }>Brand:{brand}</p>
        <p onClick={()=> setModel('XL100')}>Model:{model}</p>
        <p onClick={()=>  setYear('2021')}>Year: {year}</p>
         */}
        <p >Color:{scooter.color}</p>
        <p >Brand:{scooter.brand}</p>
        <p >Model:{scooter.model}</p>
        <p >Year: {scooter.year}</p>
        <button onClick={updateColor}>Change Scooter Info</button>
        
    </>
}

export default Scooter;