import React, { useState } from 'react'

import KeyPad from './components/KeyPad';


const App = () => {

  //states
  const [screen, setScreen]=useState('');



  //handlers
  const onButtonClick=(e)=>{
    setScreen(screen+e.target.value);
  }

  const handleEqual=()=>{
    setScreen(eval(screen));
  }

  const handleAC=()=>{
    setScreen('');
  }

  const handleBack=()=>{
    setScreen(screen.slice(0,-1));
  }



  //rendering

  return (
    <div>
      <p className="screen">{screen}</p>
      <KeyPad buttonClick={onButtonClick} onEqual={handleEqual} onAC={handleAC} onBack={handleBack}></KeyPad>
    </div>
  )
}

export default App