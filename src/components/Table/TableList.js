import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import TableRow from './TableRow'
import {Redirect} from "react-router-dom";

class TableList extends Component {
    state = {
        tableName: '',
        tableType: '',
        tableDetails: false,
    };

    selectedTableData = (tableName, tableType) => {
        if (tableName !== null && tableType !== null) {
            this.setState({tableType, tableName, tableDetails: true})
        }
    };

    renderRedirect = () => {
        if (this.state.tableDetails) {
            return <Redirect to={`/archive-type/${this.state.tableType}/${this.state.tableName}`}/>;
        }
    };

    render() {
        const tableData = this.props.tables.map((table, index) => {
            return (
                <TableRow
                    key={index}
                    id={index}
                    type={this.props.type}
                    table={table}
                    goToTableData={this.selectedTableData}
                />
            )
        });
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table Name</th>
                </tr>
                </thead>
                <tbody>
                {this.renderRedirect()}
                {tableData}
                </tbody>
            </Table>
        );
    }

}

export default TableList;