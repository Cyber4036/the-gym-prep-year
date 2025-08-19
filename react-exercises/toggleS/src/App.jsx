import { useState } from "react"

const App = () => {
  const [isDark, setIsDark]=useState(false)

  // const handleToggle=()=>{
  //   setIsDark(isDark?true: false);
  // }

  return (
    <body style={isDark?{backgroundColor: 'black'}:{backgroundColor: 'white'}}>
      <button onClick={()=>isDark? setIsDark(false): setIsDark(true)} >{isDark?'Switch to Light':'Switch to Dark'}</button>
    </body>
  )
}

export default App