import {transactionConstants} from '../constants/index';
import axios from 'axios';

export const transactionActions = {
  sendTransaction
};

function sendTransaction(address, value) {
  return dispatch => {
    const json = JSON.parse(sessionStorage.getItem('token'));
    axios({
      url: 'http://localhost:3000/api/transactions',
      method: 'post',
      headers: {
        'x-access-token': json.token
      },
      data: {
          value: value,
          address: address
      }
    }).then(response => {
      dispatch(success());
    }).catch((error) => {
      console.log(error);
    });
    function success() {
      return {type: transactionConstants.SEND_TRANSACTION}
    }
  }
}

