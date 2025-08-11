import React from 'react'


const KeyPad = ({handleClick}) => {
 
  const arr=[1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'C','=','/'];
  let count=0;

  const KeyTable=()=>{
    arr.map((index, value)=>{

      if (index==count){
        count=0;
        return(<tr>
          <td key={index}><button onClick={handleClick}>{value}</button></td>
        </tr>)
        
      }else {
        count++;
        return(<td key={index}><button onClick={handleClick}>{value}</button></td>)
      }
    })
  }

  return (
    <div>
      <table><tbody><KeyTable/></tbody></table>
    </div>
  )
  
}



export default KeyPad