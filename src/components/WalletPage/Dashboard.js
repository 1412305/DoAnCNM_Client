import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const style = {
    card: {
        margin: 50,
    },
    button: {
      margin: 12,
    }
  };

const Dashboard = ({session}) => {
  console.log(session);
  return (<div>
    <div>
      <div className="text-center">
        <h3>1 KCoin = 1$</h3>
        <hr/>
      </div>
  
      <Card style={style.card}>
        
        <CardHeader
          title = {"Available Balance: " + session.availableBalance}
          subtitle= {"Actual Balance: " + session.actualBalance} 
          actAsExpander={true}
        >
        </CardHeader>
        <CardText>
        Your address: sdlfkansfn
      </CardText>
        <CardActions>
          <RaisedButton label="Send" primary={true} style={style.button}  href="/send"/>
          <RaisedButton label="Request" secondary={true} style={style.button} href="/request"/>
        </CardActions>
      </Card>
    </div>
  </div>)
}

Dashboard.propTypes = {
  session: PropTypes.object.isRequired
}

export default Dashboard
