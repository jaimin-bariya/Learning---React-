    import {useSelector, useStore, useDispatch} from "react-redux"
    import {removeToDo, updateToDo} from "../features/ToDo/ToDoSlice"


    const ToDos = () => {

        const allToDos = useSelector(state => state.todos)
        const dispatch = useDispatch()

    return (
        <>

            <div>
                
                <ul>

                        {allToDos.map((todo) => (
                            <li key={todo.id} >{todo.title}</li>
                        ))}


                </ul>


            </div>
        
        </>
    );
    };

    export default ToDos;