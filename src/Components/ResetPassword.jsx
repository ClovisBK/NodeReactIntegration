import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api/api';

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }
        setLoading(true);

        try{
            const response = await api.post("auth/reset-password", {token, password, email});
            setMessage("Password reset successful!.");
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }catch(err){
            console.error(err);
            setError(err.response?.data?.message || "Failed to reset password");
        }finally{
            setLoading(false);
        }
    };

  return (
    <div className='form-container'>
        <h2>Reset Password</h2>
        <p>Enter your new password below.</p>
        <form onSubmit={handleSubmit}>
            <input 
            type="password"
            placeholder='Enter new password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
             />
             <input 
             type="password"
             placeholder='Confirm password'
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             required
              />
              <button type='submit'>
                {loading ? "Resetting" : "Reset Password"}
              </button>
        </form>
        {message && <p style={{color: "green", fontSize: "1.1rem", fontWeight: "bold"}}>{message}</p>}
        {error && <p style={{color: "red", fontSize: "1.1rem", fontWeight: "bold"}}>{error}</p>}
    </div>
  )
}

export default ResetPassword
