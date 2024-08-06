import { Draggable, Droppable } from "react-beautiful-dnd";
import useTaskContext from "../Contexts/Taskcontext/Taskcontext";

const AllTasks = () => {

    const tasks = useTaskContext()

    
    

  return (

    <Droppable droppableId="Root" type="group">


        {(provided) => (


            <div {...provided.droppableProps} ref={provided.innerRef}>

                {tasks.map(({id, title}, index) => (

                    <Draggable draggableId={id.toString()} key={id} index={index}> 

                        {(provided) => (

                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className="p-2 border mb-2 rounded-md bg-white text-black">
                            <h3>{title}</h3>
                            </div>
                        )}

                    </Draggable>

                    
                ))}


                {provided.placeholder}

            

            </div>

        )}

        


    </Droppable>
  );
};

export default AllTasks;