import { useState } from "react";

function AddTodo({ addTask }) {
    const [input, setInput] = useState('');
    const handler = () => {
        if (input!=='') {
            addTask(input);
            setInput('');
        }else{
            alert('Task cannot be empty')
        }

    }
    return (
        <div>
            <input type="text" placeholder="Enter Task"
                onChange={(e) => setInput(e.target.value)} value={input} />

            <button onClick={handler}>Save Task</button>
        </div>
    );
}

export default AddTodo;