import axios from 'axios';
import React, { useEffect, useState } from 'react'
import api from '../api/api'
import '../Styles/form.css'

const Users = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await api.get('/users');
                setData(response.data);
                
            }catch(err){
                setError(err.response?.data || "Error fetching users");
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if(loading) return <div>Loading data...</div>;
    if(error) return <div style={{color: "red"}}>Error: {error}</div>;

  return (
    <div>
        <h2>User Profile Data</h2>
        <table style={{border: "2", borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>

                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Users
