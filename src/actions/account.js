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

    var data = {
        email: email, 
        password: password
    }
    
    axios.post('http://localhost:3000/api/login', data)
    .then(function (result) {
        if (result.data.status)
        {
            let session = result.data;
            window.sessionStorage.setItem('token', result.data.token);
            window.sessionStorage.setItem('email', result.data.email);
            history.replace({ pathname: '/login' });
            return {
                type: accountConstants.LOGIN_SUCCESS,
                session,
            }
        }
        else {
            return dispatch => {dispatch(errorActions.warningError(result.data.msg))};
        }
    })
}

function logout(email, password){
   window.sessionStorage.clear();
   history.replace({ pathname: '/login' })
   return{
       type: accountConstants.LOGOUT
   }
}

function signup(email, password){
    var data = {
        email: email, 
        password: password
    }
    
    axios.post('http://localhost:3000/api/users', data)
    .then(function (result) {
        console.log(result);
        if (result.data.status)
        {
            return {
                type: accountConstants.SIGNUP_SUCCESS,
            }
        }
        else {
            let error =  result.data.msg;
            return {
                type: accountConstants.SIGNUP_FAILURE,
                error
            }
        }
    })
}