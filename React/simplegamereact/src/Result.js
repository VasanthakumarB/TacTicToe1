import React from "react";

function Result({secretNum,term}){
    let result;
    console.log({secretNum},{term});
    if(secretNum>term){
        result='Lower';
    }else if(secretNum<term){
        result='Higher';
    }else if(term == secretNum){
        result='Yipee! Correct';
    }else{
        result='Enter Vaild input';
    }
    return <>
        <h3>You Guessed: {result}</h3>
    </>
}

export default Result;