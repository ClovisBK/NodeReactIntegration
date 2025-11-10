import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Home = () => <h2>Welcome to the Card system</h2>;
const Login = () => <h2>Login Page</h2>;
const Register = () => <h2>Registration Page</h2>;


const App = () => {
  return (
    <Router>
      <nav style={{padding: "1rem", background: "#eee"}}>
          <Link to="/">Home</Link>
          <Link to="/login" style={{margin: "0 10px"}}>Login</Link>
          <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
