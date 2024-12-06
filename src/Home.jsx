import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom' // Corrected import
import { Button } from 'react-bootstrap'

function Home() {
    const users = useSelector((state) => state.users); // Get users from Redux state
    console.log(users);

    return (
        <div className='container'>
            <h2>Crud App with Json Server</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button className='btn btn-sm btn-primary'>Edit</Button>
                                    <Button className='btn btn-sm btn-danger ms-2'>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
