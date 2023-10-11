import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRout = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading)
    {
        return  <Spinner animation="border" variant="danger" />
    }
    if (user) {
            return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>

};

export default PrivateRout;