import { combineReducers } from 'redux';
import account from './account';
import login_error from './login_error';

const BLOCKCHAIN = combineReducers({
    account,
    login_error
})

export default BLOCKCHAIN