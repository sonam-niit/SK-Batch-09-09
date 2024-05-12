import { useEffect, useState } from "react";
import api from '../api';
import { toast } from "react-toastify";

function UsersList({setSelected}) {
    const [users,setUsers]= useState([]);
    const fetchData=async()=>{
        try {
            const resp=await api.get('user');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser=async(id)=>{
        try {
            const resp= await api.delete(`user/${id}`);
            if(resp.status==200){
                toast.success('User Deleted successfully');
                fetchData();
            }else{
                toast.error('Error while deleting user')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const viewUser=async(id)=>{
        try {
            const resp= await api.get(`user/${id}`);
            setSelected(resp.data);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th><th>Email</th><th>UserName</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td><button className="btn btn-danger" 
                                onClick={()=>deleteUser(user._id)}>X</button>
                                <button className="btn btn-success" 
                                onClick={()=>viewUser(user._id)}>view</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default UsersList;