import {connect} from 'react-redux';
import Admin from '../components/AdminPage/Admin';

const mapStateToProps = (state) => {
  return {
    session: (state.account.session)
      ? state.account.session
      : null,
    isAuthenticated: state.account.isAuthenticated
  }
}

const AdminContainer = connect(mapStateToProps, null)(Admin)

export default AdminContainer
