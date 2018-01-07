import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wallet from './WalletPage/Wallet';
import LoginContainer from '../containers/LoginContainer';
import SignUp from './AccountPage/SignUp';
import Exchange from './TransPage/Exchange';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LoginContainer}/>
            <Route path='/wallet' component={Wallet}/>
            <Route path='/login' component={LoginContainer}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/exchange' component={Exchange}/>
        </Switch>
    </main>
)

export default Router
