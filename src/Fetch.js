import React from 'react'
import{useState,useEffect} from 'react'
export default function Fetch(){
  const[dog,setDog]=useState("")
   useEffect(() => {
   
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response=>response.json())
      .then(data=>setDog(data.message))
       },[])
    
  return(
    <div>
       <img src={dog} alt=''/>
     
    </div>
  )
}