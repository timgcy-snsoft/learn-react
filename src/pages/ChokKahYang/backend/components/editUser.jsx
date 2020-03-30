import React, { useState, useEffect } from 'react';
import axios from 'axios'


function editUser(props) {

    const { name, psw, age, position } = props.location.state.user
    const [tempName, setName] = useState('')
    const [tempPsw, setPsw] = useState('')
    const [tempAge, setAge] = useState('')
    const [tempPosition, setPosition] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const editUser = {
            name: tempName,
            psw: tempPsw,
            age: tempAge,
            position: tempPosition,
        }

        axios.post('http://localhost:3000/users/edit/' + props.match.params.id, editUser)
            .then(() => {
                setName('')
                setPsw('')
                setAge('')
                setPosition('')
                location.replace('/users')
            })
            .catch(err => { setErrorMsg(err.response.data) })

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
                        onChange={(e) => setName(e.target.value.trim())} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text"
                        required
                        className="form-control w-50"
                        value={tempPsw}
                        placeholder={psw}
                        onChange={(e) => setPsw(e.target.value.trim())} />
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
                </div>
                <div>
                    {errorMsg !== '' && <h6 className="font-weight-bold text-danger">{errorMsg}</h6>}
                </div>
            </form>
            <button onClick={props.history.goBack}
                className="btn btn-dark">Back</button>
        </div >
    )
}

export default editUser
