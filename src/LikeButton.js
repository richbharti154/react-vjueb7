import React from 'react';
import {useState} from 'react'
import {AiFillHeart} from 'react-icons/ai'    
import {AiOutlineHeart} from 'react-icons/ai'
export default function LikeButton(){
  const[like,setLike]=useState(true)
  
 
  return(
    <div>
      <button onClick={()=>setLike(!like)}>{like?<AiOutlineHeart/>:<AiFillHeart/>}
      </button>
      
     <p> {like }</p>
    </div>
  )
  }