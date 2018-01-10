import {adminConstants} from '../constants/index';
import axios from 'axios';

export const adminActions = {
  getUsers,
  getTrans,
  getAdd
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

function getTrans() {
  return dispatch => {
    const json = JSON.parse(sessionStorage.getItem('token'));
    axios({
      url: 'http://localhost:3000/api/transactions',
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
      return {type: adminConstants.RECEIVE_TRANSINFO, data}
    }
  }
}

function getAdd() {
  return dispatch => {
    const json = JSON.parse(sessionStorage.getItem('token'));
    axios({
      url: 'http://localhost:3000/api/addresses',
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
      return {type: adminConstants.RECEIVE_ADDRESSES, data}
    }
  }
}
