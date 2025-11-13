import React, { useState } from 'react'
import api from '../api/api';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        
        try{
            const response = await api.post("auth/login", credentials);
            const token = response.data.token;
            if(token){
                localStorage.setItem("token", token);
                setMessage("Login Successful");
                navigate("/users");
            }else{
                setError("Login failed: No token received");
            }
        }catch(err){
            setError(err.response?.data || "Invalid email or password");
        }
    };
  return (
    <div className='form-container'>
        <h2>Login.</h2>

        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder='Email' onChange={handleChange} />
            <input type="password" name="password" placeholder='Password' onChange={handleChange} />
            <button type='submit'>Login</button>
        </form>
        <div style={{color: "blue",}}>Don't have an account? 
         <Link to="/register" style={{fontSize: "1.1rem", color: "green",}}> sign up!</Link>

         <Link to="/forgot-password" style={{marginLeft: "100px", color: "blue"}}>Forgot Password</Link>
        </div>
        
        {message && <p style={{color: "blue"}}>{message}</p>}
        {error && <p style={{color: "red"}}>{error}</p>}

    </div>
  )
}

export default Login
