import { createContext, useContext } from "react";


export const taskContext = createContext()


export const TaskContextProvider = taskContext.Provider


export default function useTaskContext(){
    return useContext(taskContext)
}