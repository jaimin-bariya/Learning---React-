import { useState } from "react";
import {useDispatch} from 'react-redux'
import {addToDo} from "../features/ToDo/ToDoSlice"



const ToDoForm = () => {

    const [input, setInput] = useState("")
    const [newpriority, setNewPriority] = useState("all")
    const dispatch = useDispatch()
    
    
    const addToDoHandler = (e) => {
        e.preventDefault()
        dispatch(addToDo(input))
        setInput("")
    }

  return (
    <>
            <form  onSubmit={addToDoHandler} className="flex">
            <input
                type="text"
                placeholder="add your Todo here..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 mr-4">
                Add
            </button>

            <select
              
              value={newpriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="rounded px-3 py-2 border-gray-200 bg-orange-500 text-white"
              >
                <option value="" disabled className="text-black ">Priority</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>

            </select>
        </form>
    </>
  );
};

export default ToDoForm;