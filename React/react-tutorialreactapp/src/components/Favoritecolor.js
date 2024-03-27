import { useState } from "react";


function FavoriteColor(){
    // let color='Red';
    const [color, setColor]=useState('Blue');
    return(
        <>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={()=>{ setColor('Red') }}> Change Color </button>
        </>
)
}

export default FavoriteColor;