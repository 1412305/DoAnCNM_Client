import {adminConstants} from '../constants/admin';

const admin = (state = {type: "", list: []}, action) => {
  switch (action.type) {
    case adminConstants.RECEIVE_USERINFO:
      return {
        type: "user",
        list: action.data
      }
    case adminConstants.RECEIVE_TRANSINFO:
      return {
        type: "transaction",
        list: action.data
      }
    case adminConstants.RECEIVE_ADDRESSES:
      return {
        type: "address",
        list: action.data
      }
    default:
      return state;
  }
}

export default admin
