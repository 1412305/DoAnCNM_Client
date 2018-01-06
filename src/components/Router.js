import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wallet from './WalletPage/Wallet';
import Login from './AccountPage/Login';
import SignUp from './AccountPage/SignUp';
import ForgotPassword from './AccountPage/ForgotPassword';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>  
            <Route path='/wallet' component={Wallet}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
        </Switch>
    </main>
)

export default Router