import { useEffect, useState } from "react";

function UseCase1() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    //executed only once when the component is Mounted
    useEffect(() => {
        console.log("My component Rendered");
        return (()=>console.log('Componnet unmouted'))
    }, [])
    //executed when the state updated of name variable
    useEffect(() => {
        console.log("Value Name: "+name);
        return (()=>console.log('Name Removed from Memory'))
    }, [name])
    useEffect(() => {
        console.log("Value Count: "+count);
        return (()=>console.log('Count Removed from Memory'))
    }, [count])
    return (
        <div>
            <h1>Use Case 1</h1>
            <h3>Name: {name}</h3>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <div className='container text-center'>
                <h2>Counter App {count}</h2>
                <button onClick={() => setCount(count + 1)} className='btn btn-secondary'>+</button>
                <button onClick={() => setCount(count - 1)} className='btn btn-secondary ms-2'>-</button>
            </div>
        </div>
    );
}

export default UseCase1;