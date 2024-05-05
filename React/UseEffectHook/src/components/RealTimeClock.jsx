import { useEffect, useState } from "react";

function RealTimeClock() {
    const [time,setTime]=useState(null);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setTime(new Date());
        },1000)

        return(()=>clearInterval(interval));
    })
    return ( <div>
        <h3>{ time&&time.toLocaleTimeString()}</h3>
    </div> );
}

export default RealTimeClock;