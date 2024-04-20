import { useState } from "react";

function UseCase3() {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const nameHandler=(e)=>{
        setName(e.target.value);
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }
    return ( 
        <div>
            <h1>Your Details</h1><hr/>
            <h3>Welcome {name.toUpperCase()}</h3>
            <h5>Email: {email}</h5>
            <input type="text" placeholder="Enter Name here"
            onChange={nameHandler} />
            <input type="email" placeholder="Enter Email here"
            onChange={emailHandler} />
        </div>
     );
}

export default UseCase3;