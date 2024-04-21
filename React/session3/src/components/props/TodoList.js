import { useState } from "react";
import AddTodo from "./AddTodo";

function TodoList() {
    const [todos,setTodos]=useState([]);

    const addTask=(task)=>{
        setTodos([...todos,task]);
        alert('Task Addedd Successfully')
    }
    return ( 
        <div>
            <ul>
                {
                    todos.map((item)=>(
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <AddTodo addTask={addTask} />
        </div>
     );
}

export default TodoList;