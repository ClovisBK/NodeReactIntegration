import React, { useState } from 'react'
import api from '../api/api';
import axios from 'axios';
import '../Styles/form.css'
const Register = () => {
const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
});
const [message, setMessage] = useState("");
const handleChange = (e) => {
setForm({...form, [e.target.name]: e.target.value});
};
const handleSubmit = async (e) => {
e.preventDefault();
setMessage();

try{
    const res = await api.post("/auth/register", form);
    setMessage(res.data || "Registration successful!");
}catch(error){
    setMessage(error.response?.data || "Error during registration");
}
};
  return (
    <div className='form-container'>
      <h2>Registration page</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='firstName' placeholder='First Name' onChange={handleChange} />
            <input type="text" name='lastName' placeholder='Last Name' onChange={handleChange} />
            <input type="email" name='email' placeholder='Email' onChange={handleChange} />
            <input type="password" name='password' placeholder='Password' onChange={handleChange} />
            <input type="tel" name='phoneNumber' placeholder='Phone Number' onChange={handleChange} />
            <input type="text" name='address' placeholder='Address' onChange={handleChange} />
            <input type="date" name='dateOfBirth' placeholder='Date of Birth' onChange={handleChange} />

            <button type='submit'>Register</button>
        </form>
        {message && <p className='status'>{message}</p>}
    </div>
  )
}

export default Register
