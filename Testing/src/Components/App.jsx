import { useState, useCallback } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import { CountContext, modeContext } from "./Contexts.js"

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState(100)


  
  const changeMode = useCallback(() => {
    console.log("Called");
    setMode((mode) => mode -1 )

  }, [mode]) 
 
  

  return (
    <>

      <modeContext.Provider value={{mode, changeMode}}>
      <CountContext.Provider value={{count, setCount}} > 
      <Navbar />
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
