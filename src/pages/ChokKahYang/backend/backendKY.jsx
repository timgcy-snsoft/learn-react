import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BasePage from '../../basePage/basePage'

import MainPage from './components/mainPage'
import Navbar from "./components/navbar"
import UserList from "./components/userList"
import CreateUser from "./components/createUser"
import EditUser from "./components/editUser"
import loginUser from "./components/loginUser"

const backendKY = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/users/main" exact component={MainPage} />
                <BasePage>
                    < Navbar />
                    <Route path="/users" exact component={UserList} />
                    <Route path="/users/create" exact component={CreateUser} />
                    <Route path="/users/edit/:id" component={EditUser} />
                    <Route path="/users/login" exact component={loginUser} />
                </BasePage>
            </Switch>
        </BrowserRouter>
    );
}

export default backendKY;
