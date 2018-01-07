import {accountConstants} from '../constants/account';

const sessionToken = window.sessionStorage.getItem('token');
const initialState = sessionToken ? {isAuthenticated: true} : {isAuthenticated: false};

const account = (state = initialState, action) => {
    switch (action.type){
        case accountConstants.LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
            }
        case accountConstants.LOGOUT:
            return {
                isAuthenticated: false,
            }
        default:
            return state;
    }
}

export default account