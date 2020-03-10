import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BasePage from '../../basePage/basePage'

import Navbar from "./components/navbar"
import UserList from "./components/userList"
import CreateUser from "./components/createUser"
import EditUser from "./components/editUser"

const backendKY = () => {


    return (
        <BasePage>
            <BrowserRouter>
                <Navbar />
                <Route path="/users" exact component={UserList} />
                <Route path="/users/create" exact component={CreateUser} />
                <Route path="/users/edit/:id" component={EditUser} />
            </BrowserRouter>
        </BasePage>
    );
}

export default backendKY;
