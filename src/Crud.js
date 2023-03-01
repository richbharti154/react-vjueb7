import React from 'react';
import {useState} from 'react'
export default function Crud(){
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  function handleChange(e){
    setValue(e.target.value)
  }
  function addData(value){
    const data1=[...data,value]
     setData(data1)
  }
   function deleteData(value){
      const newData=[...data]
      setData(newData.filter((element)=>element!==value))
   }
  return(
    <div>
     {JSON.stringify(data)}
      <input onChange={(e)=>handleChange(e)} value={value}/>
      <button onClick={()=> addData(value)}>add</button>
      <button onClick={()=> deleteData(value)}>Delete</button>
      <button>Update</button>
    </div>
  
  )
}