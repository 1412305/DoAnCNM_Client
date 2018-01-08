import React from 'react';
import Dialog from 'material-ui/Dialog';
import {FlatButton, RaisedButton, TextField} from 'material-ui';

class RequestDialog extends React.Component {
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.props.handleClose}
        />,
        <RaisedButton
          label="Request"
          secondary={true}
          onClick={this.props.handleClose}
        />,
      ];
  
      return (
        <div>
          <Dialog
            title="Request Kcoin"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.props.handleClose}
          >
            <TextField name="address" floatingLabelText="Your Address" type="text" fullWidth={true} 
                    onChange={this.handleChange} />
                <br />
            <TextField name="amount" floatingLabelText="Enter Amount" type="number" fullWidth={true}
                 onChange={this.handleChange}
            />
                <br />
          </Dialog>
        </div>
      );
    }
  }

export default RequestDialog
