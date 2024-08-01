import { useState, useCallback, useEffect } from 'react'
import Clock from './Clock'

import './App.css'
import Navbar from './Navbar'
import Stopwatch from './Components/Stopwatch'


function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState(100)
  const [time, setTime] = useState(new Date())



    const setModeNumber = useCallback(() => {
      setMode((mode) => mode - 1)
    }, [mode])







    // setInterval(() => {
    //   setTime((time) => time + 1)
    // }, 1000);




    useEffect(() => {

      const tick = () => {
        setTime(new Date())
      }


      const intervalID =setInterval(tick, 1000);

      return () => clearInterval(intervalID);


    }, [])


  return (
    <>

      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
  
      <Navbar modeNumber={mode} setMode={setModeNumber} />


      <hr />

      <Clock time={time.toLocaleTimeString()} />

      <hr />    


      <Stopwatch /> 




    </>
  )
}

export default App
