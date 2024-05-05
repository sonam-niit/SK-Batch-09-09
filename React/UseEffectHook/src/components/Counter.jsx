import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
  
    return (
        <div className='container text-center'>
          <h2>Counter App {count}</h2>
          <button onClick={()=>setCount(count+1)} className='btn btn-secondary'>+</button>
          <button onClick={()=>setCount(count-1)} className='btn btn-secondary ms-2'>-</button>
        </div>
    )
  }
  
  export default Counter