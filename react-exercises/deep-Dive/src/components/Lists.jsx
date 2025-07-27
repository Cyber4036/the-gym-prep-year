import React from 'react'



const Lists = ({arry}) => {




  return (
    <ul>
        {arry.map((note, index)=> {
            return <li key={index} >{note}</li>
        })}
    </ul>
  )
}



export default Lists