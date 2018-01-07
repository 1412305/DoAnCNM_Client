import { accountConstants } from '../constants/index';
import { errorActions } from './error'
import axios from 'axios';

export const accountActions = {
    login
};

function login(email, password){
    return dispatch => {
        var data = {
            email: email,
            password: password
        }

        axios.post("http://localhost:4000/api/login", data)
        .then(function (session) {
            window.sessionStorage.setItem('token', session.token);
            return {
                type: accountConstants.LOGIN_SUCCESS,
                session,
            }
        })
        .catch(function (error) {
            dispatch(errorActions.warningError(error));
        });
    }

}
