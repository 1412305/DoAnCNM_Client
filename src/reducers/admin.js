import {adminConstants} from '../constants/admin';

const admin = (state = [], action) => {
    switch (action.type){
        case adminConstants.RECEIVE_USERINFO:
            return [...state, ...action.data];
        default: return state;
    }
}

export default admin
