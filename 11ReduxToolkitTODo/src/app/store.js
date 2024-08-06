import {configureStore} from "@reduxjs/toolkit"
import todoReducers from "../features/ToDo/ToDoSlice"


 // always pass object
export const store = configureStore({
    reducer: todoReducers,
})


