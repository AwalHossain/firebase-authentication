import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    console.log(user);
    return (
        <div>
            <ul className="nav">
            <Link to="/home">Home</Link>
            <Link to="/shipping">shipping</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <span>{ user.displayName } </span>
            {
                
              user?.email &&  <button onClick={logOut}> Log Out</button>
            }
            </ul>
        </div>
    );
};

export default Header;