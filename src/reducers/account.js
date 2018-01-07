import {accountConstants} from '../constants/account';

const account = (state = {}, action) => {
    switch (action.type){
        case accountConstants.LOGIN_SUCCESS:
            return action.session;
        case accountConstants.LOGIN_FAILURE:
            return action.error;
        case accountConstants.INPUT_CHANGE:
            return action.name;
        default:
            return state;
    }
}

export default account