import React, { useState, useEffect } from 'react';
import axios from 'axios'


const createUser = (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [position, setPosition] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            age,
            position
        }

        console.log(user)

        axios.post('http://localhost:3000/users/add', user)

        setName('')
        setAge('')
        setPosition('')
        location.replace('/users')
    }

    return (
        <div>
            <h3 className="font-weight-bold">Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mt-1">Name: </label>
                    <input type="text" required className="form-control w-50"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <label className="mt-1">Age: </label>
                    <input type="number" required className="form-control w-50"
                        value={age}
                        onChange={(e) => setAge(e.target.value)} />
                    <label className="mt-1">Position: </label>
                    <input type="text" required className="form-control w-50"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-dark" />
                    <button onClick={props.history.goBack}
                        className="btn btn-dark ml-2">Back</button>
                </div>
            </form>
        </div>
    );
}

export default createUser;
