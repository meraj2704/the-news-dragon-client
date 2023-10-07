import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Header from '../Pages/Shared/Header';
import Register from '../Pages/Login/Register';

const LoginLayouts = () => {
    return (
        <div>
           
            <Login></Login>
            <Register></Register>
        </div>
    );
};

export default LoginLayouts;