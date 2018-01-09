import {adminConstants} from '../constants/index';
import axios from 'axios';

export const adminActions = {
  getUsers
};

function getUsers() {
  return dispatch => {
    const json = JSON.parse(sessionStorage.getItem('token'));
    axios({
      url: 'http://localhost:3000/api/users',
      method: 'get',
      headers: {
        'x-access-token': json.token
      }
    }).then(response => {
      dispatch(success(response.data));
    }).catch((error) => {
      console.log(error);
    });
    function success(data) {
      return {type: adminConstants.RECEIVE_USERINFO, data}
    }
  }
}
