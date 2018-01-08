import {accountConstants} from '../constants/account';

const signup = (state = "waiting", action) => {
    switch (action.type){
        case accountConstants.SIGNUP_SUCCESS:
            return "";
        case accountConstants.SIGNUP_FAILURE:
            return action.error;
        default:
            return state;
    }
}

export default signup