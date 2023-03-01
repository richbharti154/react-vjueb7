import React from "react";
import "./style.css";
import {Atom} from './Atom'
import {useRecoilState} from 'recoil'

export default function App() {
  const[count,setCount]=useRecoilState(Atom)
  let Colour
  if(count>=20 && count>=0){
    Colour='red'
  }else if(count<0){
  Colour='blue'
  }
  function increment(){
    setCount(count+1)
  }
  function decrement() {
    setCount(count-1)
  }
  return (
    <div style={{backgroundColor:Colour,width:'100%',height:'100vh',}}>
    <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Dercrement</button>
    </div>
  );
}
