import { connect } from 'react-redux';
import Login from '../components/Login';
import accountActions from '../actions/account';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
            onClick: (email, password) => { 
                e.preventDefault();
                dispatch(accountActions.login(email, password));
        }
    }
}

const LoginContainer = connect(
    null,
    mapDispatchToProps
)(Login)
  
  export default LoginContainer