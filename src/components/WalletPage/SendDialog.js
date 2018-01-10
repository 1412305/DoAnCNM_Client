import React from 'react';
import Dialog from 'material-ui/Dialog';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import PropTypes from 'prop-types';

class SendDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      value: '',
      valueError: '',
      addressError: ''
    };

  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
    let re = /[0-9a-f]{64}/g;
    switch (name) {
      case 'value':
        {
          if (this.state.value === "") {
            this.setState({valueError: 'Value is required.'});
          } else if (value <= 0) {
            this.setState({valueError: 'Please input more than 0 kcoin.'});
          }
          else if (value <= this.props.actualBalance)
          {
            this.setState({valueError: 'You dont have enough Kcoin.'});
          }
          else this.setState({valueError: ''});
          break;
        }
      default:
        {
          if (this.state.address === "") {
            this.setState({addressError: 'Address is required.'});
          }
          else if (!this.state.address.test(re)){
            this.setState({addressError: 'Please input a valid address.'});
          }
          else
            this.setState({addressError: ''});
        }

    }
  }

  handleSubmit() {
    if (this.state.value === "") {
      this.setState({valueError: 'Value is required.'});
    }
    if (this.state.address === "") {
      this.setState({addressError: 'Address is required.'});
    }

    if (this.state.valueError === '' && this.state.addressError === '') {
      //this.props.onClick(this.state.value, this.state.address);
      this.props.handleClose();
    }

  }

    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.props.handleClose}
        />,
        <RaisedButton
          label="Send"
          primary={true}
          onClick={() => this.handleSubmit()}
        />,
      ];
  
      return (
        <div>
          <Dialog
            title="Send KCoin"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.props.handleClose}
          >
            <TextField name="address" floatingLabelText="To" type="text" fullWidth={true} 
                    onChange={() => this.handleChange() } />
                <br />
            <TextField name="amount" floatingLabelText="Enter Amount" type="number" fullWidth={true}
            onChange={() => this.handleChange() }/>
                <br />
          </Dialog>
        </div>
      );
    }
  }

  SendDialog.propTypes = {
    actualBalance: PropTypes.number.isRequired,
  }

export default SendDialog
