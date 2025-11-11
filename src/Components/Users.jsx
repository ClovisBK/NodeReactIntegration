import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('/V1/api/users');

                setData(response.data);
                setLoading(false);
            }catch(err){
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading) return <div>Loading data...</div>;
    if(error) return <div>Error: {error}</div>;

  return (
    <div>
        <h2>User Profile Data</h2>
        <table>
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
                        <td>{user.phone}</td>
                    </tr>

                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Users
