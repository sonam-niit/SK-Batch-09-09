import { useEffect, useState } from "react";

function UseCase2() {
    const [users,setUsers]=useState([]);
    const fetchData=async()=>{
        try {
            const resp= await fetch('https://jsonplaceholder.typicode.com/users');
            const json= await resp.json();
            setUsers(json);//updating state
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            <h3>fetch data example</h3>
            <table>
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Username</th></tr>
                </thead>
                <tbody>
                    {
                        users.map(item=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default UseCase2;