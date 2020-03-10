import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const userList = () => {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [tempDelete, setTempDelete] = useState('')


    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            await axios.get('http://localhost:3000/users')
                .then(response => {
                    setUsers(response.data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetchUser()
    }, [])

    useEffect(() => {
        if (tempDelete !== '') {
            const deleteUser1 = async () => {
                await axios.delete('http://localhost:3000/users/' + tempDelete)
                    .then(() => {
                        setUsers(users.filter(user => user._id !== tempDelete))
                        setTempDelete('')
                    })

            }
            deleteUser1()
        }
    }, [tempDelete])


    if (loading) {
        return <h2>Loading...</h2>
    }

    return (

        <div>
            <table className="table text-center">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.position}</td>
                            <td>
                                <Link to={{ pathname: `/users/edit/${user._id}`, state: { user } }}
                                    className="btn btn-dark mx-2">Edit</Link>
                                <a href="#" onClick={() => setTempDelete(user._id)}
                                    className="btn btn-dark" >Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default userList;
