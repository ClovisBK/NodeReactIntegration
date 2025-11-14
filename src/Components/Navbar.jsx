import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/form.css';
const Navbar = () => {
const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
         navigate("/login");
    }
  return (
    <nav className='navbar'>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/login">Login</Link></li>
        <li> <Link to="/register">Register</Link></li>
        <li> <Link to="/users">Users</Link></li>
        <button onClick={handleLogout} 
        style={{
            padding: "3px 10px",
             borderRadius: ".5rem",
             border: "none",
             fontSize: "1.1rem"
             }}>Logout</button>
        </ul>
    </nav>
  )
}

export default Navbar
