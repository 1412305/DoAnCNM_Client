import { accountConstants } from '../constants/index';
import { errorActions } from './error'
import axios from 'axios';
import history from '../history';

export const accountActions = {
    login,
    logout,
    signup
};

function login(email, password){
    return dispatch => {
        var data = {
            email: email, 
            password: password
        }
        
        axios.post('http://localhost:3000/api/login', data)
        .then(function (result) {
            if (result.data.email === email)
            {
                let session = result.data;
                window.sessionStorage.setItem('token', JSON.stringify(result.data));
                dispatch(success(session));
                history.replace({ pathname: '/wallet' });
                
            }
            else {
                dispatch(errorActions.warningError(result.data.msg));
            }
        })
    }
    
    function success(session) { return { type: accountConstants.LOGIN_SUCCESS, session } }
}

function logout(email, password){
   window.sessionStorage.clear();
   history.replace({ pathname: '/login' })
   return{
       type: accountConstants.LOGOUT
   }
}

function signup(email, password){
    return dispatch =>{
        var data = {
            email: email, 
            password: password
        }
        
        axios.post('http://localhost:3000/api/users', data)
        .then(function (result) {
            if (result.data.email === email)
            {
                dispatch(signup_success());
            }
            else {
                let error = result.data.errors.email.message;
                dispatch(signup_failure(error));
            }
        })
    }
   
    function signup_success() { return { type: accountConstants.SIGNUP_SUCCESS };}
    function signup_failure(error){ return { type: accountConstants.SIGNUP_FAILURE, error };}
}