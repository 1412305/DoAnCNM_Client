import { accountConstants } from '../constants/index';
import axios from 'axios';

export const accountActions = {
    login,
};

function login(email, password){
    var data = {
        email: email, 
        password: password
      }

    axios.post('https://localhost:3000/login', data)
    .then(function (response) {
        return {
            type: accountConstants.LOGIN_SUCCESS,
            email,
        }
    })
    .catch(function (error) {
        return {
            type: accountConstants.FAILURE,
            error
        }
    });
}