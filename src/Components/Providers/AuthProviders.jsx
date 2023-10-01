import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../../App';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user,setUser] = useState('');
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        signIn,
        setUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;