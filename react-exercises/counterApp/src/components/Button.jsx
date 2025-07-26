import React from 'react'

const Button = ({ add, minus, minusDisabled }) => {
  return (
    <div className=''>
      <button onClick={add} className='btn btn-outline'>+</button>
      <button onClick={minus} disabled={minusDisabled} className='btn btn-solid'>-</button>
    </div>
  )
}

export default Button