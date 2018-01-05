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
    link: {
        color: cyan500,
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
    },
    p: {
        fontSize: 14
    }
  };

const SignUp = () => (
    <div className="mx-auto text-center" style={style.form}>
        <Paper zDepth={2} style={style.paper}>
            <h2 className='w-100 text-left' style={style.h}>Sign up</h2>
           
            <TextField floatingLabelText="Email" fullWidth={true}/>
            <br />
            <TextField floatingLabelText="Password" type="password" fullWidth={true}/>
            <br />
            <TextField floatingLabelText="Password Confirm" type="password" fullWidth={true}/>
            <br />
            <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Sign up" primary={true} containerElement={<Link to='/login'/>} />
            
            <div style={style.div}>
                <p className="float-left m-0" style={style.p}> Already have a wallet?&nbsp;    
                    <a href="/login" style={style.link} >
                     Sign in now
                    </a>
                </p>
            </div>
             
        </ Paper>
    </div>
)

export default SignUp