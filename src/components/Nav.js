import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const Nav = ({onClick, isAuthenticated}) => {
  return (
    <div>
    <AppBar title="BLOCKCHAIN"
      iconElementRight={isAuthenticated && <FlatButton label="Logout" onClick={onClick} />}/>  
  </div>);
}
  
Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default Nav
