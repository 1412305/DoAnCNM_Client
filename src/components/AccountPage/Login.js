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

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        this.props.onClick
    }

    render() {
        
        return (
            <div className="mx-auto text-center" style={style.form}>
        <Paper zDepth={2} style={style.paper}>
            <h2 className='w-100 text-left' style={style.h}>Log into your wallet</h2>
           
            <TextField name="email" floatingLabelText="Email" fullWidth={true}/>
            <br />
            <TextField name="password" floatingLabelText="Password" type="password" fullWidth={true}/>
            <br />
            <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Login" 
            primary={true} containerElement={<Link to='/wallet'/>} onClick={this.handleSubmit} />
            
            <div style={style.div}>
                <a className="float-left" href="/signup" style={style.link} >
                    Sign up now
                </a>
              
                <a className="float-right" href="/recovery" style={style.link} >
                    Forgot password?
                </a>
            </div>
             
            </ Paper>
        </div>
        );
    }
}

export default Login