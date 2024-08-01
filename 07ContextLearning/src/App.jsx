import { useState } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import './App.css'
import Usercontextprovider from './Context/Usercontext/Usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>Hello JP</h1>
      <Dashboard/>
    </Usercontextprovider>
  )
}

export default App
