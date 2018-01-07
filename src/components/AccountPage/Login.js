import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { cyan500 } from 'material-ui/styles/colors.js';

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
        color : cyan500,
        margin: 0
    },
    paper: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30
    },
    div:{
        height: 50
    }
  };

const Login = ({onChange, onClick, email}) => {
   return (
   <div className="mx-auto text-center" style={style.form}>
    <Paper zDepth={2} style={style.paper}>
        <h2 className='w-100 text-left' style={style.h}>Log into your wallet</h2>
       
        <TextField name="email" floatingLabelText="Email" type="email" fullWidth={true} 
            onChange={(e) => onChange(e.target.name, e.target.value)} />
        <br />
        <TextField name="password" floatingLabelText="Password" type="password" fullWidth={true}
            onChange={(e) => onChange(e.target.name, e.target.value)}
        />

        <br />
        <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Login" 
        primary={true} onClick={() => onClick({email})} />
        
        <div style={style.div}>
            <a className="float-left" href="/signup" style={style.link} >
                {email}
            </a>
        </div>
         
        </ Paper>
    </div>);
}

Login.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
  }

export default Login