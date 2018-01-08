import { combineReducers } from 'redux';
import account from './account';
import login_error from './login_error';
import signup from './signup';

const BLOCKCHAIN = combineReducers({
    account,
    login_error,
    signup
})

export default BLOCKCHAIN