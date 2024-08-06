import { useState } from 'react'
import ToDoForm from './Compenents/ToDoForm'
import ToDos from './Compenents/ToDos'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Provider store={store}>

      <ToDoForm />
      <ToDos/>

    </Provider>
  )
}

export default App
