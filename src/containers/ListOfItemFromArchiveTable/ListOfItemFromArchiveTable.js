import React, {Component} from 'react';
import {getListOfData} from "../../axios/Api";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class ListOfItemFromArchiveTable extends Component {
    state = {
        items: [],
    };


    getItems = () => {
        getListOfData(this.props.match.params.type, this.props.match.params.table).then(items => {
            this.setState({
                items: [...items.data],
            });
            console.log(items.data);
        })
    };

    componentDidMount() {
        this.getItems()
  }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                          <th>#</th>
                          <th>ID</th>
                        </tr>
                      </thead>
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item[this.props.match.params.type +'_id']}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to={'/'}>Back</Link>
            </div>
        );
    }
}

export default ListOfItemFromArchiveTable;