import React, { useState } from 'react'
import Displayer from './components/Displayer'
import Button from './components/Button'
import Switchy from './components/Switchy'
import './App.css'

const App = () => {
  const [count, setCount]= useState(0);
  const [on, setOn]= useState('off');
  const [styl, setStyl]=useState('btn btn-outline')

  const handleDecrement = () => setCount(c => c > 0 ? c - 1 : 0);
  const handleIncrement = () => setCount(c => c + 1);
  const handleTurnOn= () => setOn(b=>{
    setStyl(on=='on'? 'btn btn-solid':'btn btn-outline')
    return b=='off'?'on':'off';

  })
  

  return (
    <div className="">
      <h1>Counter App</h1>
      <Displayer value={count} className='element'/>
      <Button minus={handleDecrement} add={handleIncrement} minusDisabled={count === 0} className='element'/>
      <div><Switchy value={on} swtch={handleTurnOn} styl={styl} className='element'></Switchy></div>

    </div>
  
  )
}



export default App