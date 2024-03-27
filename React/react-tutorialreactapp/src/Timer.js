import { useEffect, useState } from "react";

function Timer(){
    const [ count, setCount]=useState(1);
useEffect(()=>{
    console.log("Screen Rendered");
    // updateCount()
    // setTimeout(()=>{
    //     setCount((previousState)=>{return previousState+1})
    // },1000)
})
// function updateCount(){
//     if(count>10){
//     setCount(1);
//  }
// }
function addCount(){
    setCount((previousState)=> {return previousState+1})
}
    return<>
    <h1>I have rendered {count} time</h1>
    <button onClick={addCount}>Add Count</button>
    </>
}

export default Timer;