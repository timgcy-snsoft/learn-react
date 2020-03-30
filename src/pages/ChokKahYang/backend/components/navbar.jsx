import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg">
                <Link to="/users" className="navbar-brand">User List</Link>
                <Link to="/users/create" className="nav-link btn btn-dark mx-2">New User</Link>
                <Link to="/users/login" className="nav-link btn btn-dark mx-2">Login</Link>
            </nav>
        );
    }
}