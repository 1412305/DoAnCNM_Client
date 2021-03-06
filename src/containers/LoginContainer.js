import { connect } from 'react-redux';
import Login from '../components/AccountPage/Login';
import { accountActions } from '../actions/account';

const mapStateToProps = (state) => {
    return {
        error: state.login_error,
        isAuthenticated: state.account.isAuthenticated
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (email, password) => { 
            dispatch(accountActions.login(email, password));
        }
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
  
export default LoginContainer