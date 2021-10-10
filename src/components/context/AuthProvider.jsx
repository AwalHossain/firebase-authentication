import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebse';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const {children} = props
    console.log(children);
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;