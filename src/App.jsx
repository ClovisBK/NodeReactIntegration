import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Register from './Components/Register';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';


const App = () => {
  return (
    <Router>
      <Navbar style={{padding: "1rem", background: "#eee"}}>
          <Link to="/">Home</Link>
          <Link to="/login" style={{margin: "0 10px"}}>Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/users">Users</Link>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route 
            path='/users'
            element={<ProtectedRoute>
              <Users/>
            </ProtectedRoute>
            }
        />
      </Routes>
    </Router>
  )
}

export default App
