import { useState } from "react";
import { toast } from "react-toastify";
import api from '../api';
import { useNavigate } from "react-router-dom";

function Login({setLogin}) {
    const navigate= useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });
    const [validationErrors,setValidationErrors]=useState({});
    const validateForm=()=>{
        const errors={};
        const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!user.email){
            errors.email="Email cannot be Empty";
        }else if(!emailPattern.test(user.email)){
            errors.email="Not a valid EmailID";
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
        if(Object.keys(errors).length===0){
            setValidationErrors({})
            try {
                const resp= await api.post('auth/login',user);
                if(resp.status==200){
                    //alert(resp.data.message);
                    setLogin(resp.data.user); //set payload to login state of app comp
                    toast.success(resp.data.message);
                    navigate('/dashboard');
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
            <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        </form>
    );
}

export default Login;