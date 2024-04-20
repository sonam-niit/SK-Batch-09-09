import { useState } from "react";

function UseCase2() {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        if(count===0){
           return alert('You cannot decrese as its already 0')
        }
        setCount(count-1);
    }
    return ( 
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
     );
}

export default UseCase2;