import React, { useState } from 'react'
import api from '../api/api';
import axios from 'axios';
import '../Styles/form.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
const navigate = useNavigate();
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
const [errors, setErrors] = useState({});

const handleChange = (e) => {
setForm({...form, [e.target.name]: e.target.value});
setErrors({...errors, [e.target.name]: ""});

};

const validate = () => {
    const newErrors = {};

    if(!form.firstName.trim()) newErrors.firstName = "First name is required";
    if(!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if(!form.email.trim()) newErrors.email = "Email is required";
    else if(!/\S+@\S+\.\S+/.test(form.email))
        newErrors.email = "invalid email address";
    if(!form.password.trim())
        newErrors.password = "Password is required";
    else if(form.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";

    if(!form.phoneNumber.trim())
        newErrors.phoneNumber = "Phone number is required";

    if(!form.address.trim())
        newErrors.address = "Address is required";
    if(!form.dateOfBirth.trim())
        newErrors.dateOfBirth = "Date of birth is required";

    return newErrors;
};

const handleSubmit = async (e) => {
e.preventDefault();
setMessage("");
const validationErrors = validate();

if(Object.keys(validationErrors).length > 0){
    setErrors(validationErrors);
    return;
}


try{
    const res = await api.post("/auth/register", form);
    setMessage(res.data || "Registration successful!");

    localStorage.setItem("token", res.data.token);

    setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "", 
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
    });
    setErrors({});
    navigate("/users");
}catch(error){
    setMessage(error.response?.data || "Error during registration");
}

};

  return (
    <div className='form-container'>
      <h2>Registration page</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='firstName' 
            placeholder='First Name' 
            value={form.firstName} 
            onChange={handleChange} />
            {errors.firstName &&  <span id='fnameError'>{errors.firstName}</span>}

            <input 
            type="text"
             name='lastName' 
             placeholder='Last Name' 
             value={form.lastName} 
             onChange={handleChange} />
            {errors.lastName &&  <span id='fnameError'>{errors.lastName}</span>}

            <input
             type="email" 
             name='email' 
             placeholder='Email' 
             value={form.email}
              onChange={handleChange} />
            {errors.email &&  <span id='fnameError'>{errors.email}</span>}

            <input 
             type="password" 
             name='password' 
             placeholder='Password' 
             value={form.password} 
             onChange={handleChange} />
            {errors.password &&  <span id='fnameError'>{errors.password}</span>}

            <input 
             type="tel" 
             name='phoneNumber' 
             placeholder='Phone Number' 
             value={form.phoneNumber} 
             onChange={handleChange} />
            {errors.phoneNumber &&  <span id='fnameError'>{errors.phoneNumber}</span>}

            <input 
            type="text" 
            name='address' 
            placeholder='Address' 
            value={form.address} onChange={handleChange} />
            {errors.address &&  <span id='fnameError'>{errors.address}</span>}

            <input
             type="date" 
             name='dateOfBirth' 
             value={form.dateOfBirth} 
             onChange={handleChange} />
            {errors.dateOfBirth &&  <span id='fnameError'>{errors.dateOfBirth}</span>}

            <button type='submit'>Register</button>
        </form>
        {message && <p style={{color: "green"}}>{message}</p>}
    </div>
  )
}

export default Register
