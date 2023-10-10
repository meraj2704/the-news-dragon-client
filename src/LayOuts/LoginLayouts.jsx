import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Header from '../Pages/Shared/Header';
import Register from '../Pages/Login/Register';
import NavigationBar from '../Pages/Shared/NavigationBar';

const LoginLayouts = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
           <Login></Login>
        </div>
    );
};

export default LoginLayouts;