import { useState } from "react";

function UseCase1() {
    const [name,setName]= useState('Sonam Soni');
    const change=()=>{
        setName('Skill Academy');//updating state
    }
    return ( 
        <div>
            <h3>Simple State Example</h3>
            <h3>Welcome {name}</h3>
            <button onClick={change}>Change Name</button>
        </div>
     );
}

export default UseCase1;