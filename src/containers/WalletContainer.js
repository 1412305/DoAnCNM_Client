import { connect } from 'react-redux';
import Wallet from '../components/WalletPage/Wallet';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.account.isAuthenticated
    } 
}

const WalletContainer = connect(
    mapStateToProps,
    null
)(Wallet)
  
export default WalletContainer