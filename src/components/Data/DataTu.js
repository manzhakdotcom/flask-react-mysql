import React from 'react';
import {Table} from "react-bootstrap";

const DataTu = (props) => {
    console.log(props.data);
    let tuItems = null;
    if(props.data) {
        tuItems = props.data.map((item, index) => {
        return (
            <tr key={props.id + index}>
                <td>{item.id}</td>
                <td>{item.tu_id}</td>
                <td>{item.operation}</td>
                <td>{item.time_upd}</td>
                <td>{item.personal_id}</td>
                <td>{item.comment}</td>
            </tr>
        )
    });
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>TU Id</th>
                    <th>Operation</th>
                    <th>Time update</th>
                    <th>Personal Id</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {tuItems}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTu;