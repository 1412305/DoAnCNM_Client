import React from 'react';
import DashboardContainer from '../../containers/DashboardContainer';
import PropTypes from 'prop-types';
import history from '../../history';

class Wallet extends React.Component{
    componentWillMount(){
        if (!this.props.isAuthenticated)
            history.replace({ pathname: '/login'});
    }

    render(){
        if (!this.props.isAuthenticated)
            return (<div></div>);
        return (<div>
            <DashboardContainer />
        </div> );
    }
}

Wallet.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

export default Wallet