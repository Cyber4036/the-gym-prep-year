// App.js
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Buttons from './components/Buttons';
import Counter from './components/Counter';


const App = () => {
  // State for total time in seconds
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);  
  const [msg, setMsg] = useState(false);

  // Handler to update total time when inputs change
  const handleTimeChange = (minutes, seconds) => {
    setTotalSeconds(Number(minutes) * 60 + Number(seconds));
  };

  // setTotalSeconds(min, sec);
  useEffect(()=> handleTimeChange(min,sec), [min, sec])

  // Handle reset
  function handleReset() {
    setTotalSeconds(0);
    setMin(0);
    setSec(0);
  }
  
  //Countdown logic

  useEffect(
    ()=>{
      let intervalId=null;
      if (isActive==true && totalSeconds>0){
        intervalId= setInterval(() => {
        setTotalSeconds(totalSeconds-1);
      }, 1000);
      } else if (isActive==true && totalSeconds==0){
        setTotalSeconds(0);
        setMin(0);
        setSec(0)
        setMsg(true)
        setActive(false)
      } else {
        console.error('Crap, something is wrong and I don`t know what!!!');
        
      }
      

      return ()=>clearInterval(intervalId);
    }, [isActive, totalSeconds]
  )

  return (
    <div>
      {msg?<h1>Times Up!!!</h1>:<h1>CountDown Timer</h1>}
      <Input min={min} sec={sec} setMin={setMin} setSec={setSec} isActive={isActive} />
      <Counter totalSeconds={totalSeconds} ></Counter>
      <Buttons isActive={isActive} setActive={setActive} handleReset={handleReset} setMsg={setMsg} ></Buttons>
    </div>
  );
};

export default App;