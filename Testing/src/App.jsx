import { useState, useCallback, useMemo } from 'react'
import './App.css'
import Button from './Components/Button.jsx'
import CallBack from './Components/CallBack.jsx'
import { CountContext, modeContext } from "./Contexts.js"






function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState(100)


  
  const changeMode = useCallback(() => {
    
    setMode((mode) => mode -1 )

  }, [mode]) 



 


  const modeContextValue = useMemo(() => ({mode, changeMode}), [mode, setMode])

  const countContextValue = useMemo(() => ({count, setCount}), [count])



  

  return (
    <>

      <modeContext.Provider value={modeContextValue}>
      <CountContext.Provider value={countContextValue} > 
      <div>

        <Button />
        <hr />
        <CallBack />

      </div>
      </CountContext.Provider>
      </modeContext.Provider>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>


      <button onClick={changeMode} >Mode Change : {mode}</button>

    </>
  )
}

export default App
