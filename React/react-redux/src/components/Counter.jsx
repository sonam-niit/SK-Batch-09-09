import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/actions";

function Counter() {
    const count= useSelector(state=>state.counter.count);
    const dispatch= useDispatch();
    return ( 
        <div>
            <h3>Counter: {count}</h3>
            <button className="btn btn-primary"
            onClick={()=>dispatch(increment())}>+</button>
            <button className="btn btn-primary ms-3"
            onClick={()=>dispatch(decrement())}>-</button>
        </div>
     );
}

export default Counter;