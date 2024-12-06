import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './UserRaducer'

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Accessing users from Redux store
    const users = useSelector((state) => state.users); 

    const handleSubmit = (event) => {
        event.preventDefault();

        // Creating a new user with the next available ID
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // Next ID based on the last user's ID
            name: name,
            email: email
        };

        // Dispatching the addUser action
        dispatch(addUser(newUser));

        // Resetting the form fields
        setName('');
        setEmail('');

        // Navigating back to the home page after submission
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control"  
                            placeholder='Enter name' 
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            placeholder='Enter email'  
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
