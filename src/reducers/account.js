import accountConstans from '../constants/account';

const account = (state = {}, action) => {
    switch (action.type){
        case accountConstants.LOGIN_SUCCESS:
            return email;
        case accountConstants.LOGIN_FAILURE:
            return error;
        default:
            return state;
    }
}

export default account