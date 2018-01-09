import {connect} from 'react-redux';
import Admin from '../components/AdminPage/Admin';
import {adminActions} from '../actions/admin';

const mapStateToProps = (state) => {
  return {
    data: (state.account.session)
      ? state.account.session
      : null,
    isAuthenticated: state.account.isAuthenticated,
    users: state.admin
  }
}

const mapDispatchToProps = (dispatch) => (
  {loadUsers: () => dispatch(adminActions.getUsers())}
)

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)

export default AdminContainer
