import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {cyan500} from 'material-ui/styles/colors.js';

const style = {
  form: {
    width: 400,
    marginTop: 50
  },
  link: {
    color: cyan500,
    fontSize: 13
  },
  h: {
    color: cyan500,
    margin: 0
  },
  paper: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30
  },
  div: {
    height: 50
  }
};

const Admin = ({onChange, onClick, email}) => {
  return (<div className="mx-auto text-center" style={style.form}>
    <Paper zDepth={2} style={style.paper}>
      <h2 className='w-100 text-left' style={style.h}>Exchange</h2>

      <TextField
        hintText="Money Field (KCoin)"
        floatingLabelText="Exchange Money"
        type="text"
      /><br />
      <TextField
        hintText="Paste an address"
        floatingLabelText="Exchange To"
        type="text"
      /><br />
      <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Confirm" primary={true} onClick={() => onClick({email})}/>

    </Paper>
  </div>);
}

// Login.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   onClick: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired
// }

export default Admin
