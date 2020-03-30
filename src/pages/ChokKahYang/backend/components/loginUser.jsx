import React, { useState, useEffect } from 'react';
import axios from 'axios'

function loginUser(props) {
    const [name, setName] = useState('')
    const [psw, setPsw] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [user, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            psw
        }
        axios.post('http://localhost:3000/users/login', user)
            .then((res) => {
                if (res.data !== null) {
                    setName('')
                    setPsw('')
                    setErrorMsg('')
                    setUser(res.data)
                }
                setErrorMsg(`Wrong Name or Password!`)
                //location.replace('/main/:id')
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        if (user !== '')
            props.history.push({
                pathname: '/users/main',
                state: {
                    user
                }
            })
    }, [user])

    return (
        <div>
            <h3 className="font-weight-bold">Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mt-1">Name: </label>
                    <input type="text" required className="form-control w-50"
                        value={name}
                        onChange={(e) => setName(e.target.value.trim())} />
                    <label className="mt-1">Password: </label>
                    <input type="text" required className="form-control w-50"
                        value={psw}
                        onChange={(e) => setPsw(e.target.value.trim())} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-dark" />
                </div>
                <div>
                    {errorMsg !== '' && <h6 className="font-weight-bold text-danger">{errorMsg}</h6>}
                </div>
            </form>
        </div>
    )
}

export default loginUser
