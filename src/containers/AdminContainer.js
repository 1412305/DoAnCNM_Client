import {connect} from 'react-redux';
import Admin from '../components/AdminPage/Admin';
import {adminActions} from '../actions/admin';

const mapStateToProps = (state) => {
  console.log(state.admin);
  return {
    data: (state.account.session)
      ? state.account.session
      : null,
    isAuthenticated: state.account.isAuthenticated,
    tableData: state.admin
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    loadUsers: () => dispatch(adminActions.getUsers()),
    loadTrans: () => dispatch(adminActions.getTrans()),
    loadAdds: () => dispatch(adminActions.getAdd())
  }
)

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)

export default AdminContainer
