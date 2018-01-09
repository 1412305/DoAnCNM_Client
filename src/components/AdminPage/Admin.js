import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {Card} from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import {Tabs, Tab} from 'material-ui/Tabs';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const accData = [
  {
    email: 'nguyentainhat2110@gmail.com',
    availableBalance: '10000',
    actualBalance: '10000'
  }, {
    email: 'nguyentainhat2110@gmail.com',
    availableBalance: '10000',
    actualBalance: '10000'
  }
];

const addData = [
  {
    address: 'a8b4b4c953a51db32b407e15cdefcdafef84d118374b8af61401a2e605434971',
    availableBalance: '10000',
    actualBalance: '10000'
  }
];

const tableData = [
  {
    hash: 'a8b4b4c953a51db32b407e15cdefcdafef84d118374b8af61401a2e605434971',
    inputs: ['1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP'],
    outputs: [
      '14kz9eDukYUWJ9NeDphCSKXPKgabj72Wbn', '1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP'
    ],
    amount: [1, 1]
  }
];

class Admin extends React.Component {
  componentWillMount() {
    let session = this.props.data;
    if (!this.props.isAuthenticated || session.authority !== 'admin')
      history.push('/login');
    else {
      this.props.loadUsers();
    }
  }
  render() {
    let session = this.props.data;
    let users = this.props.users;
    if (!this.props.isAuthenticated || session.authority !== 'admin') {
      return (<div></div>);
    }

    var availableBalance = 0;
    var actualBalance = 0;
    for (var i = 0; i < users.length; i++) {
      availableBalance += users[i].availableBalance;
      actualBalance += users[i].actualBalance;
    }

    return (<div>
      <Card>
        <TableRow className="my-auto">
          <TableHeaderColumn tooltip="Number of users" colSpan="4" style={{
              textAlign: 'left',
              fontSize: 20
            }}>
              USERS: {users.length} 
          </TableHeaderColumn>
          <TableHeaderColumn tooltip="Available Balance" colSpan="3" style={{
              textAlign: 'left',
              fontSize: 20
            }}>
              AVAILABLE BALANCES: {availableBalance} KCoin
          </TableHeaderColumn>
          <TableHeaderColumn tooltip="Actual Balance" colSpan="3" style={{
              textAlign: 'left',
              fontSize: 20
            }}>
              ACTUAL BALANCES: {actualBalance} KCoin
          </TableHeaderColumn>
        </TableRow>
      </Card>
      <Tabs>
        <Tab label="ACCOUNTS">
          <div>
            <Table height="300" fixedHeader={true} selectable={false}>
              <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn colSpan="10" tooltip="Transaction List" style={{
                      textAlign: 'left',
                      fontSize: 20
                    }}>
                    Users List
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="User Email" colSpan="4">Email</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Available Balance" colSpan="3">Available Balance</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Actual Balance" colSpan="3">Actual Balance</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={true}>
                {
                  this.props.users.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn colSpan="4">{row.email}</TableRowColumn>
                    <TableRowColumn colSpan="3" children={row.availableBalance + ' KCoin'}></TableRowColumn>
                    <TableRowColumn colSpan="3" children={row.actualBalance + ' KCoin'}></TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </Tab>
        <Tab label="TRANSACTIONS">
          <div>
            <Table height="300" fixedHeader={true} selectable={false}>
              <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn colSpan="11" tooltip="Transaction List" style={{
                      textAlign: 'center',
                      fontSize: 20
                    }}>
                    Transacion List
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="Hash" colSpan="4">Hash</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Inputs" colSpan="3">Inputs</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Outputs" colSpan="3">Outputs</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Amount" colSpan="1">Amount</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={true}>
                {
                  tableData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn colSpan="4">{row.hash}</TableRowColumn>
                    <TableRowColumn colSpan="3" children={row.inputs.map((e, i) => (<p key={i}>{e}</p>))}></TableRowColumn>
                    <TableRowColumn colSpan="3" children={row.outputs.map((e, i) => (<p key={i}>{e}</p>))}></TableRowColumn>
                    <TableRowColumn colSpan="1" children={row.amount.map((e, i) => (<p key={i}>{e}</p>))}></TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </Tab>
        <Tab label="ADDRESS">
          <div>
            <Table height="300" fixedHeader={true} selectable={false}>
              <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn colSpan="10" tooltip="Transaction List" style={{
                      textAlign: 'left',
                      fontSize: 20
                    }}>
                    Transacion List
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="Address" colSpan="4">Address</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Available Balance" colSpan="3">Available Balance</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Actual Balance" colSpan="3">Actual Balance</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={true}>
                {
                  addData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn colSpan="4">{row.address}</TableRowColumn>
                    <TableRowColumn colSpan="3" children={row.availableBalance + ' KCoin'}></TableRowColumn>
                    <TableRowColumn colSpan="3" children={row.actualBalance + ' KCoin'}></TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </Tab>
      </Tabs>
    </div>);
  }
}

Admin.propTypes = {
  data: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired
}

export default Admin
