import {accountConstants} from '../constants/account';

const sessionToken = JSON.parse(window.sessionStorage.getItem('token'));
const initialState = sessionToken ? {isAuthenticated: true, session: sessionToken} : {isAuthenticated: false};

const account = (state = initialState, action) => {
    switch (action.type){
        case accountConstants.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                session: action.session
            })
        case accountConstants.LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false
            })
        default: return state;

    }
}

export default account