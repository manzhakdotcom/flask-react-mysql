import React from 'react';
import {Table} from "react-bootstrap";

const DataTi = (props) => {
    console.log(props.data);
    let tiItems = null;
    if(props.data) {
        tiItems = props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.ti_id}</td>
                <td>{item.val_before}</td>
                <td>{item.val_after}</td>
                <td>{item.time_tag}</td>
                <td>{item.time}</td>
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
                    <th>TI Id</th>
                    <th>Value Before</th>
                    <th>Value After</th>
                    <th>Time tag</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {tiItems}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTi;