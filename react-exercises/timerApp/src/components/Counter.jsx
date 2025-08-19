import React from 'react'

const Counter = ({ totalSeconds }) => {
    // Time displayer 

        let minutes=0
        totalSeconds>60? minutes=Math.floor((totalSeconds)/60): 0;
        let seconds= totalSeconds%60;


  return (
    <div>
        <h2>{minutes} : {seconds}</h2>
    </div>
  )
}

export default Counter