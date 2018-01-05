import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { cyan500 } from 'material-ui/styles/colors.js';

const style = {
    form: {
        width: 400,
        marginTop: 50 
    },
    h: {
        color : cyan500,
        margin: 0
    },
    paper: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30
    },
  };

const ForgotPassword = () => (
    <div className="mx-auto text-center" style={style.form}>
        <Paper zDepth={2} style={style.paper}>
            <h2 className='w-100 text-left' style={style.h}>Account recovery</h2>
           
            <TextField floatingLabelText="Email" fullWidth={true} />
            <br />
           
            <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Find your account" primary={true} containerElement={<Link to='/wallet'/>} />
        </ Paper>
    </div>
)

export default ForgotPassword