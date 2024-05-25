import { useEffect } from "react";
import api from '../api';

function Profile() {

    const fetchData=async()=>{
        try {
            const resp= await api.get('user/profile',{ withCredentials: true });
            console.log(resp.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData()
    },[]);
    return ( 
        <div>
            <h3>Profile Page</h3>
        </div>
     );
}

export default Profile;