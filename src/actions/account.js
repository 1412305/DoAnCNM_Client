import { accountConstants } from '../constants/index';

export const accountActions = {
    login,
    inputChange,
};

function inputChange(name, value){
    return {
        type: accountConstants.INPUT_CHANGE,
        name: value,
    }
}

function login(email, password){
  
    // var data = {
    //     email: email, 
    //     password: password
    //   }

      let error = "Fail";
      
      if (email === "luong"){
        let session = email;
        return {
            type: accountConstants.LOGIN_SUCCESS,
            session,
        }
    }
    else{
        return {
            type: accountConstants.LOGIN_FAILURE,
            error,
        }
    }
    // axios.post('https://localhost:3000/login', data)
    // .then(function (response) {
       
    // })
    // .catch(function (error) {
    //     return {
    //         type: accountConstants.FAILURE,
    //         error
    //     }
    // });
}