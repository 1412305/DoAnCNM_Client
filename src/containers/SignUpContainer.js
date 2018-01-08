import { connect } from 'react-redux';
import SignUp from '../components/AccountPage/SignUp';
import { accountActions } from '../actions/account';

const mapStateToProps = (state) => {
    return {
        msg: state.signup,
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (email, password) => { 
            dispatch(accountActions.signup(email, password));
        }
    }
}

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
  
export default SignUpContainer