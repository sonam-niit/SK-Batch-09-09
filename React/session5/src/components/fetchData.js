import { useState } from "react";

function FetchData() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await resp.json();
            setUsers(json);
        } catch (error) {
            console.log(error);
        }
    }
    // const tbody = [];
    // users.forEach((user) =>
    //     tbody.push(<tr>
    //         <td>{user.name}</td>
    //         <td>{user.username}</td>
    //         <td>{user.email}</td>
    //     </tr>)
    // )
    const tbody=users.map(user =>
        (<tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>)
    )
    return (
        <div>
            <button onClick={getData}>Get Data</button>
            <table>
                <thead>
                    <tr><th>Name</th><th>UserName</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
    )
}
export default FetchData;