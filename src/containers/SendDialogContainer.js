import { connect } from 'react-redux';
import SendDialog from '../components/WalletPage/SendDialog';
import { transactionActions } from '../actions/transaction';

const mapStateToProps = (state) => {
    return {
       actualBalance: state.account.session ? state.account.session.actualBalance : null
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
            sendTransaction: (value, address) => { 
                dispatch(transactionActions.sendTransaction(value, address));
            },
    }
}

const SendDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendDialog)
  
export default SendDialogContainer