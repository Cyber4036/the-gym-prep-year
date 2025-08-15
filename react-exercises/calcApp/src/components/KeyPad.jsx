import React from 'react'

const KeyPad = ({buttonClick, onEqual, onAC, onBack}) => {



  return (
    <>
        <table>
        <thead>
            <tr>
            <td> <button value={'AC'} onClick={onAC}>AC</button></td>

            <td><button value={'%'} onClick={buttonClick}>%</button></td>
            <td><button value={'/'} onClick={buttonClick}>/</button></td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><button value={'7'} onClick={buttonClick}>7</button></td>
            <td><button value={'8'} onClick={buttonClick}>8</button></td>
            <td><button value={'9'} onClick={buttonClick}>9</button></td>
            <td><button value={'*'} onClick={buttonClick}>*</button></td>
            </tr>
            <tr>
            <td><button value={'4'} onClick={buttonClick}>4</button></td>
            <td><button value={'5'} onClick={buttonClick}>5</button></td>
            <td><button value={'6'} onClick={buttonClick}>6</button></td>
            <td><button value={'-'} onClick={buttonClick}>-</button></td>
            </tr>
            <tr>
            <td><button value={'1'} onClick={buttonClick}>1</button></td>
            <td><button value={'2'} onClick={buttonClick}>2</button></td>
            <td><button value={'3'} onClick={buttonClick}>3</button></td>
            <td><button value={'+'} onClick={buttonClick}>+</button></td>
            </tr>
            <tr>
            <td><button value={'0'} onClick={buttonClick}>0</button></td>
            <td><button value={'.'} onClick={buttonClick}>.</button></td>
            <td><button value={'back'} onClick={onBack}>~</button></td>
            <td><button value={'='} onClick={onEqual}>=</button></td>
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default KeyPad