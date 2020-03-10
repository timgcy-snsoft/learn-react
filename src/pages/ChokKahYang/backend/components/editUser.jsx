import React, { useState, useEffect } from 'react';
import axios from 'axios'


function editUser(props) {

    const { name, age, position } = props.location.state.user
    const [tempName, setName] = useState('')
    const [tempAge, setAge] = useState('')
    const [tempPosition, setPosition] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const editUser = {
            name: tempName,
            age: tempAge,
            position: tempPosition,
        }

        console.log(editUser);

        axios.post('http://localhost:3000/users/edit/' + props.match.params.id, editUser)
            .then(res => console.log(res.data));

        location.replace('/users')
    }
    return (
        <div>
            <h3>Edit User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                        required
                        className="form-control w-50"
                        value={tempName}
                        placeholder={name}
                        onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input type="number"
                        required
                        className="form-control w-50"
                        value={tempAge}
                        placeholder={age}
                        onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Position: </label>
                    <input type="text"
                        required
                        className="form-control w-50"
                        value={tempPosition}
                        placeholder={position}
                        onChange={(e) => setPosition(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit User" className="btn btn-dark" />
                    <button onClick={props.history.goBack}
                        className="btn btn-dark ml-2">Back</button>
                </div>
            </form>
        </div >
    )
}

export default editUser
