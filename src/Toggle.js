import React from 'react';
import {useState} from 'react'
export default function Toggle(){
  const data=[
    'hi I am richa',
    'hlo i am there',
     'I like coding',
     'I like learning',
  ]
  const[color,setColor]=useState("grey")
  function changeColor(){
    setColor(color==="red"? "blue": "red");
  }
  return(
    <>
    <div style={{backgroundColor:color}}>
      {data.map((element)=><li>{element}</li>)}
      </div>
      <button style={{marginTop:'30px',margin:'8px'}} onClick={changeColor}> button</button>
     </>
  )
}