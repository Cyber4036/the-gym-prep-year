// Input.js
// import React, { useState,  } from 'react';
// useEffect
const Input = ({ min, sec, setSec, setMin, isActive }) => {
  // States for minutes and seconds


  // Notify parent whenever time changes
//   useEffect(() => {
    
//   }, [min, sec, onTimeChange]);

  return (
    <div>
      <label>
        Minutes:
        <input 
        disabled={isActive}
          type="number" 
          value={min} 
          onChange={e => setMin(e.target.value)} 
          min="0"
        />
      </label>
      <label>
        Seconds:
        <input disabled={isActive}
          type="number" 
          value={sec} 
          onChange={e => setSec(e.target.value)} 
          min="0" 
          max="59"
        />
      </label>
    </div>
  );
};

export default Input;