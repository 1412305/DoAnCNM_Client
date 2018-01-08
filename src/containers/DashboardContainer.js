import { connect } from 'react-redux';
import Dashboard from '../components/WalletPage/Dashboard';

const mapStateToProps = (state) => {
    return {
        session: (state.account.session) ? state.account.session : null
    } 
}

const DashboardContainer = connect(
    mapStateToProps,
    null
)(Dashboard)
  
export default DashboardContainer