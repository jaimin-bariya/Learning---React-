import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {id: 1, title: "Hello world", completed: false, priority: "all"},
    ]
}



export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newToDo = {
                id: nanoid(),
                title: action.payload,
                completed: action.payload,
                priority: action.payload,
            }
            console.log(newToDo);
            
            state.todos.push(newToDo)
        },

        removeToDo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== id)

        },

        updateToDo: (state, action) => {
            const id = action.payload
            const title = action.payload

            state.todos = state.todos.filter((todo) => todo.id === id ? todo.title = title : todo )

        }


    }

})



export const {addToDo, removeToDo, updateToDo} = todoSlice.actions
export default todoSlice.reducer