import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    card: {
        margin: 50,
    },
    button: {
      margin: 12,
    }
  };

const Dashboard = () => (<div >
  <div>
    <div className="text-center">
      <h3>Tỉ giá hiện giờ của 1 KCoin = 1$</h3>
      <hr/>
    </div>
    <Card style={style.card}>
      <CardHeader
        title = {'Total Balance: 10000' + ' KCoin'}
        subtitle="Your address: adasdasdasdasdadasdasd"
        actAsExpander={true}
      />
      <CardActions>
        <RaisedButton label="Exchange" primary={true} style={style.button} />
        <RaisedButton label="Request" secondary={true} style={style.button} />
      </CardActions>
    </Card>
  </div>
</div>)

export default Dashboard
