import React from 'react'
import Screen from './components/Screen'
import KeyPad from './components/KeyPad'
import { useState } from 'react'

const App = () => {
//states
  const [input,setInput]=useState('');
  let buff= '';

//handler
  const handleClick=(e)=>{
    if (e.target.value!== '='){
      buff= input+(e.target.value);
      setInput(buff);
    }


    // buff= ''+(e.target.value)
    // setInput(buff);
  }


  return (
    <div>
      <h1>Calculator</h1>
      <Screen input={input}></Screen>
      <KeyPad handleClick={handleClick}></KeyPad>

    </div>
  )
}

export default App