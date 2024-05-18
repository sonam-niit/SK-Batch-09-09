import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from '../api';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate= useNavigate();
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '' });
    const [validationErrors,setValidationErrors]=useState({});
    const validateForm=()=>{
        const errors={};
        const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!user.name){
            errors.name="Name cannot be Empty";
        }
        if(!user.email){
            errors.email="Email cannot be Empty";
        }else if(!emailPattern.test(user.email)){
            errors.email="Not a valid EmailID";
        }
        if(!user.username){
            errors.username="UserName cannot be Empty";
        }
        if(!user.password){
            errors.password="Password cannot be Empty";
        }else if(user.password.length<8){
            errors.password="Password must be 8 characters long";
        }
        return errors;
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors= validateForm();
        console.log(errors);
        if(Object.keys(errors).length===0){
            setValidationErrors({})
            try {
                const resp= await api.post('auth/register',user);
                if(resp.status==201){
                    //alert(resp.data.message);
                    toast.success(resp.data.message);
                    navigate('/login'); //programatic route
                }
            } catch (error) {
                console.log(error);
                //alert(error.response.data.message);
                toast.error(error.response.data.message);
            }
        }else{
            setValidationErrors(errors);
        }
    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className={`form-group mt-3 ${validationErrors.name ? 'has-error':''}`}>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" 
                className={`form-control ${validationErrors.name ? 'is-invalid':''} `}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                {
                    validationErrors.name && 
                    <div className="invalid-feedback">{validationErrors.name}</div>
                }
            </div>
            <div className={`form-group mt-3 ${validationErrors.email ? 'has-error':''}`}>
                <label>Email</label>
                <input type="email" placeholder="Enter Email" 
                className={`form-control ${validationErrors.email ? 'is-invalid':''} `}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                {
                    validationErrors.email &&  <div className="invalid-feedback">
                        {validationErrors.email}
                  </div>
                }
            </div>
            <div className={`form-group mt-3 ${validationErrors.username ? 'has-error':''}`}>
                <label>UserName</label>
                <input type="text" placeholder="Enter UserName" 
                className={`form-control ${validationErrors.username ? 'is-invalid':''} `}
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
                {
                    validationErrors.username &&  <div className="invalid-feedback">
                        {validationErrors.username}
                  </div>
                }
            </div>
            <div className={`form-group mt-3 ${validationErrors.password ? 'has-error':''}`}>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" 
                className={`form-control ${validationErrors.password ? 'is-invalid':''} `}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                {
                    validationErrors.password &&  <div className="invalid-feedback">
                        {validationErrors.password}
                  </div>
                }
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
        </form>
    );
}

export default Register;