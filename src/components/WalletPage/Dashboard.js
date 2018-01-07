import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    card: {
        margin: 50,
    },
    button: {
      margin: 12,
    }
  };

const Dashboard = () => (<div>
  <div>
    <div className="text-center">
      <h3>1 KCoin = 1$</h3>
      <hr/>
    </div>

    <Card style={style.card}>
      
      <CardHeader
        title = {'Total Balance: 10000'.concat(' KCoin')}
        subtitle="Your address: adasdasdasdasdadasdasd"
        actAsExpander={true}
      >
      </CardHeader>
      <CardActions>
        <RaisedButton label="Exchange" primary={true} style={style.button}  href="/exchange"/>
        <RaisedButton label="Request" secondary={true} style={style.button} href="/request"/>
      </CardActions>
    </Card>
  </div>
</div>)

export default Dashboard
