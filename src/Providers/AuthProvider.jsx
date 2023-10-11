import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile}  from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const createUser = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    const updateUserProfile =(userName, url) =>{
        return updateProfile(auth.currentUser, {displayName:"Meraj", photoURL:"ami"})
    }
    const user = null;

    const authInfo ={
        user,
        createUser,
        signIn,
        updateUserProfile

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;