import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password) 
    }
    const authentications = {createUser}
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;