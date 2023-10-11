import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile}  from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
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
    const logOut= () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, loggedUser =>{
            console.log(loggedUser + " in now");
            setUser(loggedUser);
        })

        return ()=>{
            unsubscribed();
        }
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        updateUserProfile,
        logOut

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;