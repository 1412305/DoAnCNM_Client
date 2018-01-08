import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const Nav = ({onClick, isAuthenticated}) => {
  const nav = isAuthenticated ? <AppBar title="BLOCKCHAIN" iconElementRight={<FlatButton 
  label="Logout" onClick={onClick} />}/> : <AppBar title="BLOCKCHAIN" />
  return (
    <div>
    {nav}
    </div>
  );
}
  
Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default Nav
