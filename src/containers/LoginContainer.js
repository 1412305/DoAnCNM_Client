import { connect } from 'react-redux';
import Login from '../components/AccountPage/Login';
import { accountActions } from '../actions/account';

const mapStateToProps = (state, ownProps) => {
    return {
        email: (state.email) ? state.email : ''
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
            onClick: (email) => { 
                dispatch(accountActions.login(email));
            },
            onChange: (name, value) => {
                console.log(name + " " + value);
                dispatch(accountActions.inputChange(name, value));
            }
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
  
export default LoginContainer