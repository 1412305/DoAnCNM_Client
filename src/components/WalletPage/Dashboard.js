import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import RequestDialog from './RequestDialog';
import SendDialog from './SendDialog';
import TransactionList from './TransactionList';

const style = {
    card: {
        margin: 50,
    },
    button: {
      margin: 12,
    },
    list: {
      width: 1250
    }
  };

class Dashboard extends React.Component{
  state = {
    openRequestDialog: false,
    openSendDialog: false
  };
  

  handleSend(){
    this.setState({openSendDialog: true});
  }

  handleRequest(){
    this.setState({openRequestDialog: true});
  }

  handleSendDialogClose(){
    this.setState({openSendDialog: false});
  }

  handleRequestDialogClose(){
    this.setState({openRequestDialog: false});
  }
  

  render (){
    let session = this.props.session;
    return (<div>
        <div className="text-center">
          <h3>1 KCoin = 1$</h3>
          <hr/>
        </div>
        {this.state.openRequestDialog && <RequestDialog open={this.state.openRequestDialog} handleClose={() => this.handleRequestDialogClose()} />}
        {this.state.openSendDialog && <SendDialog open={this.state.openSendDialog} handleClose={() => this.handleSendDialogClose()} />}
        <Card style={style.card}>
          
          <CardHeader
            title = {"Available Balance: " + session.availableBalance}
            subtitle= {"Actual Balance: " + session.actualBalance} 
            actAsExpander={true}
          >
          </CardHeader>
          <CardText>
          Your address: sdlfkansfn
        </CardText>
          <CardActions>
            <RaisedButton label="Send" primary={true} onClick={() => this.handleSend()} style={style.button} />
            <RaisedButton label="Request" secondary={true} onClick={() => this.handleRequest()} style={style.button} />
          </CardActions>
        </Card>
        <div className ="mx-auto text-center transaction-list">
          <TransactionList />
        </div>
    </div>)
  }
}

Dashboard.propTypes = {
  session: PropTypes.object.isRequired
}

export default Dashboard
