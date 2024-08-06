import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskContextProvider } from './Contexts/Taskcontext/Taskcontext'
import AllTasks from './Components/AllTasks'
import {DragDropContext} from 'react-beautiful-dnd'

function App() {
  const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([
    {id: 1, title:"Task 1"},
    {id: 2, title:"Task 2"},
    {id: 3, title:"Task 3"}])


  const onDragEnd = (result) => {

    const {source, destination, type} = result;
    
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    if (type === "group") {
      const reorderedTasks = [...tasks] 
      const [ removedTasks ] = reorderedTasks.splice(source.index, 1)
    
      reorderedTasks.splice(destination.index, 0, removedTasks)

      setTasks(reorderedTasks)
      

    }



  }

  return (
    <TaskContextProvider value={tasks}>


      


      <div className='border p-10 '>

      <h1 className='mb-10'>ALL TASKS </h1>

      <DragDropContext onDragEnd={onDragEnd}>

        <AllTasks />

      </DragDropContext>




      </div>





    </TaskContextProvider>
  )
}

export default App
