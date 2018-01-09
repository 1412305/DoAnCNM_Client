import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableData = [
  {
    hash: 'a8b4b4c953a51db32b407e15cdefcdafef84d118374b8af61401a2e605434971',
    inputs: ['1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP'],
    outputs: ['14kz9eDukYUWJ9NeDphCSKXPKgabj72Wbn', '1H6ZZpRmMnrw8ytepV3BYwMjYYnEkWDqVP'],
    amount: [1, 1]
  }
];

class TransacionList extends Component {
  render() {
    return (
        <Table
          height="300"
          fixedHeader={true}
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            enableSelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn colSpan="11" tooltip="Transaction List"
              style={{textAlign: 'center', fontSize: 20}}>
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
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn colSpan="4">{row.hash}</TableRowColumn>
                <TableRowColumn colSpan="3"children={row.inputs.map( (e, i) => (<p key={i}>{e}</p>))}></TableRowColumn>
                <TableRowColumn colSpan="3" children={row.outputs.map( (e, i) => (<p key={i}>{e}</p>))}></TableRowColumn>
                <TableRowColumn colSpan="1" children={row.amount.map( (e, i) => (<p key={i}>{e}</p>))}></TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
    )
}
}

export default TransacionList
