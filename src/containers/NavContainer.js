import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { accountActions } from '../actions/account';

const mapDispatchToProps = (dispatch) => {
    return {
            onClick: () => { 
                dispatch(accountActions.logout());
            },
    }
}

const NavContainer = connect(
    null,
    mapDispatchToProps
)(Nav)
  
export default NavContainer