import { combineReducers } from 'redux';
import account from './account';
import login_error from './login_error';
import signup from './signup';
import admin from './admin';

const BLOCKCHAIN = combineReducers({
    account,
    login_error,
    signup,
    admin
})

export default BLOCKCHAIN
