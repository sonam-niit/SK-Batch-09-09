import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../features/counterSlice";

function Counter() {

    const count= useSelector(state=>state.counter.value);
    const dispatch=useDispatch();
    return ( 
        <div>
            <h3>Count: {count} </h3>
            <button className="btn btn-primary ms-3"
            onClick={()=>dispatch(increment())}>+</button>
            <button className="btn btn-primary ms-3"
            onClick={()=>dispatch(decrement())}>-</button>
            <button className="btn btn-primary ms-3"
            onClick={()=>dispatch(incrementByAmount(5))}>Increment By 5</button>
            <button className="btn btn-primary ms-3"
            onClick={()=>dispatch(decrementByAmount(3))}>Decrement By 3</button>
        </div>
     );
}

export default Counter;