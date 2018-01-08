import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { accountActions } from '../actions/account';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.account.isAuthenticated
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
            onClick: () => { 
                dispatch(accountActions.logout());
            },
    }
}

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)
  
export default NavContainer