import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WalletContainer from '../containers/WalletContainer';
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignUpContainer';
import AdminContainer from '../containers/AdminContainer';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LoginContainer}/>
            <Route path='/wallet' component={WalletContainer}/>
            <Route path='/login' component={LoginContainer}/>
            <Route path='/signup' component={SignUpContainer}/>
            <Route path='/admin' component={AdminContainer}/>
        </Switch>
    </main>
)

export default Router
