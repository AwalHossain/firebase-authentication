import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Concat from '../Concat/Concat';
import AuthProvider from '../context/AuthProvider';
import Header from '../Header/Header';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <div>
           <AuthProvider>
           <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path="/home">
                    <Concat></Concat>
                </Route>
                <Route exact path="/">
                    <Concat></Concat>
                </Route>
                <PrivateRoute path="/shipping">
                    <Shipping></Shipping>
                </PrivateRoute>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Register></Register>
                </Route>
            </Switch>
            </BrowserRouter>
           </AuthProvider>
        </div>
    );
};

export default Home;