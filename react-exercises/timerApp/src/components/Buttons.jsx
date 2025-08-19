import React from 'react'

const Buttons = ({ isActive, setActive, handleReset, setMsg }) => {
    
  return (
    <div>
        <button disabled={isActive} onClick={()=>setActive(true)}>Start</button>
        <button onClick={()=> isActive? setActive(false): setActive(true)}>{isActive? 'Stop': 'Resume'} </button>
        <button onClick={()=>{handleReset(); setActive(false); setMsg(false)} } >Reset</button>
    </div>
  )
}

export default Buttons