import {transactionConstants} from '../constants/transaction';

const transaction = (state = "", action) => {
    switch (action.type){
        case transactionConstants.SEND_TRANSACTION0:
            return "";
        default:
            return state;
    }
}

export default transaction