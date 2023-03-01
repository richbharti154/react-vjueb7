import React from 'react'
import {useState} from 'react'
export default function Hide() {
  const[show,setShow]=useState(true)
  
  return(
    <div>
      <button onClick={() => setShow(!show)}>{show?'hideelement':'showelement'}
      </button>
      {show && <div>Toggle button</div>}
     
    </div>
  )
}