import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Header from '../Header/Header';

const Concat = () => {
    const {user} = useAuth()
    return (
        <div>

            <h2>I am from Concat or Home</h2>
            <h3>User: {user.displayName}</h3>
        </div>
    );
};

export default Concat;