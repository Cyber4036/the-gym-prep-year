import React from 'react'
import {useState} from 'react'
import Lists from './components/Lists.jsx'


const App = () => {
  //states
  const [textd,setTextd] = useState('');
  const [notes, setNotes] = useState([]);


  //handlers
  const handleSub=(e)=>{
    e.preventDefault();
    //alert(`Subbed on ${textd}`)
    setNotes([...notes,textd]);
    setTextd('');
  }
//      
  return (
    <>
    <form onSubmit={handleSub}>
      <input 
      type="text" 
      value={textd}
      onChange={e=>setTextd(e.target.value)}/>
      <button type='submit'>sub</button>

      
    </form>
    <div>{textd}</div>

    <Lists arry={notes}/>
    </>
    
  )
}

export default App