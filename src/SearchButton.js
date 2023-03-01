import React from 'react';
import {useState} from 'react'
export default function SearchButton(){
  const data=[
    {
      name:'richa'
    },
    
      {
        name:'neha'
      },
      {
        name:'kittu'
      },
      {
        name:'choti'
      },
      {
        name:'chunmun'
      },
  ]
  const[search,setSearch]=useState('')
  function handleClick1(e){
    setSearch(e.target.value)
  }
  return(
    <div>
      <b>Search:</b>
      <input  onChange={handleClick1} value={search}/>
     </div>
  )
}