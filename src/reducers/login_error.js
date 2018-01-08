import {errorConstants} from '../constants/error';

const initialState = "";

const login_error = (state = initialState, action) => {
    switch (action.type){
        case errorConstants.ERROR_FAILURE:
            return action.error;
        default:
            return state;
    }
}

export default login_error