import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";
import {getTablesList} from "../../axios/Api";
import {Table} from "react-bootstrap";

class ListOfArchiveTables extends Component {
    state = {
        tables: [],
        type: ''
    };


    getTables = () => {
        getTablesList(this.props.match.params.type).then(tables => {
            this.setState({
                tables: [...tables.data],
                type: this.props.match.params.type
            });
            console.log(tables.data);
        })
    };

    componentDidMount() {
        this.getTables()
  }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                          <th>Table name</th>
                        </tr>
                      </thead>
                    <tbody>
                        {this.state.tables.map((table, index) => (
                            <tr key={index}>
                                <td><NavLink to={'/' + this.state.type + '/' + table.table_name}>{table.table_name}</NavLink></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to={'/'}>Back</Link>
            </div>
        );
    }
}

export default ListOfArchiveTables;