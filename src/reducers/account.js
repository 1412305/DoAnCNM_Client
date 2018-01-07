import {accountConstants} from '../constants/account';

const sessionToken = window.sessionStorage.getItem('token');
const initialState = sessionToken ? { isAuthenticated: true, sessionToken } : {};

const account = (state = initialState, action) => {
    switch (action.type){
        case accountConstants.LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                session: action.session.email
            };
        default:
            return state;
    }
}

export default account