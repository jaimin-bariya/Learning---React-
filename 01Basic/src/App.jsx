import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)




  function increase() {
    if (count < 20) 
      {
        setCount(count+1)
        setCount(count+2)
        setCount(count+3)
        setCount(count+4)
        setCount(count+5)
      }
      else setCount(count)
  }

  function decrease() {
    if (count > 0) setCount(count-1)
      else setCount(count)
  }

  return (
    <>

      <h1>Total Count : {count} </h1>

      <button onClick={increase}>Increase to { count + 1 }</button>
      <button onClick={decrease}>Decrease to { count - 1 }</button>

      



    </>

  )
}

export default App
