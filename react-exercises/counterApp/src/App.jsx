import React, { useState } from 'react'
import Displayer from './components/Displayer'
import Button from './components/Button'
import './App.css'

const App = () => {
  const [count, setCount]= useState(0)

  const handleDecrement = () => setCount(c => c > 0 ? c - 1 : 0);
  const handleIncrement = () => setCount(c => c + 1);

  return (
    <><div className="">
      <h1>Counter App</h1>
      <Displayer value={count} className='element'/>
      <Button minus={handleDecrement} add={handleIncrement} minusDisabled={count === 0} />
    </div>
      
    </>
  )
}



export default App