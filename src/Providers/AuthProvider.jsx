import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth}  from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const createUser = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const user = null;

    const authInfo ={
        user,
        createUser,

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;