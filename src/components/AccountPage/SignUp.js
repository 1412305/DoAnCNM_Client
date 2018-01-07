import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { cyan500 } from 'material-ui/styles/colors.js';
import PropTypes from 'prop-types';

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

  class SignUp extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            emailError: '',
            passError: '',
            passConfirmError: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        switch (name){
            case 'email': {
                if (value === ""){
                    this.setState({ emailError: 'Email is required.' });
                }
                else if (!value.includes('@')){
                    this.setState({ emailError: 'Email is invalid.' });
                }
                else this.setState({ emailError: '' });
                break;
            }
            case 'password': {
                if (value === ""){
                    this.setState({ passError: 'Password is required.' });
                } 
                else this.setState({ passError: '' });
                break;
            }
            default: {
                if (value === ""){
                    this.setState({ passConfirmError: 'Confirm Password is required.' });
                } 
                else this.setState({ passConfirmError: '' });
            }
            
        }
    }

    handleSubmit() {
        if (this.state.email === ""){
            this.setState({ emailError: 'Email is required.' });
        } 
        if (this.state.password === ""){
            this.setState({ passError: 'Password is required.' });
        }
        if (this.state.passwordConfirm === ""){
            this.setState({ passConfirmError: 'Password is required.' });
        }
      
        if (this.state.emailError === '' && this.state.passError === '' && this.state.passConfirmError === '')
        {
            if (this.state.passwordConfirm !== this.state.password)
            {
                this.setState({ passConfirmError: 'Password Confirm is not correct.' });
            }
            else this.props.onClick(this.state.email, this.state.password);
        }
           
    }

    render() {
        let isError = (this.props.msg === "") ? false : true;
        let notifyDiv = (this.props.msg === "") ? <div className="alert alert-danger"> {
            this.props.error}</div> : <div className="alert alert-success"> {this.props.error}</div>;

        return (
            <div className="mx-auto text-center" style={style.form}>
            <Paper zDepth={2} style={style.paper}>
                <h2 className='w-100 text-left' style={style.h}>Sign up</h2>
                {isError && (this.props.msg !== "waiting") && notifyDiv}
                <TextField name="email" floatingLabelText="Email" type="email" fullWidth={true} 
                     errorText={this.state.emailError} onChange={this.handleChange} />
                <br />
                <TextField name="password" floatingLabelText="Password" type="password" fullWidth={true}
                     errorText={this.state.passError} onChange={this.handleChange}
                />
                <br />
                <TextField name="passwordConfirm" floatingLabelText="Confirm Password" type="password" fullWidth={true}
                     errorText={this.state.passConfirmError} onChange={this.handleChange}
                />
                <br />

                <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Sign up" 
                primary={true} onClick={this.handleSubmit} />
                
                <div style={style.div}>
                    <p className="float-left m-0" style={style.p}> Already have a wallet?&nbsp;    
                        <a href="/login" style={style.link} >
                        Sign in now
                        </a>
                    </p>
                </div>
                
                </ Paper>
            </div>
           
        );
    }
    
}

SignUp.propTypes = {
    onClick: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
  }

export default SignUp