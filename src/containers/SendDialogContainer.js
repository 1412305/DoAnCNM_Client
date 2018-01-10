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
            sendTransaction: () => { 
                dispatch(transactionActions.sendTransaction());
            },
    }
}

const SendDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendDialog)
  
export default SendDialogContainer