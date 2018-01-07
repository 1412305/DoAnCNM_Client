import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const sessionEmail = window.sessionStorage.getItem('email');

const Nav = ({onClick}) => {
  return (
    <div>
    <AppBar title="BLOCKCHAIN"
      iconElementRight={(sessionEmail) &&  <FlatButton label="Logout" onClick={onClick} />}/>  
  </div>);
}
  
Nav.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Nav
