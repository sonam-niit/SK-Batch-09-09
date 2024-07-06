import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../features/taskSlice";

function TodoApp() {
    const [task, setTask] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const handleClick = () => {
        if (task.trim() !== '') {
            dispatch(addTask(task));
            setTask('')
        } else {
            alert('Task cannot be Empty');
        }
    }
    return (
        <div>
            <h3>TodoApp</h3>
            <input placeholder="Enter your Task" value={task} className="form-control mt-3"
                onChange={(e) => setTask(e.target.value)} />
            <button className="btn btn-primary mt-3" onClick={handleClick}>Add Task</button>
            <ul className="list-group mt-3">
                {
                    todos.map(task => (
                        <li className="list-group-item" key={task.id} style={{
                            textDecoration: task.completed?'line-through':'none'
                        }}>{task.text}
                            <button className="btn btn-success float-end"
                                onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
                            <button className="btn btn-danger float-end"
                                onClick={() => dispatch(removeTask(task.id))}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoApp;