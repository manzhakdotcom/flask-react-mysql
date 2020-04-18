import React from 'react';
import {Table} from "react-bootstrap";

const DataTs = (props) => {
    console.log(props.data);
    let tsItems = null;
    if(props.data) {
        tsItems = props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.ts_id}</td>
                <td>{item.val_before}</td>
                <td>{item.val_after}</td>
                <td>{item.time_tag}</td>
                <td>{item.time}</td>
                <td>{item.dev_desc}</td>
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
                    <th>TS Id</th>
                    <th>Value Before</th>
                    <th>Value After</th>
                    <th>Time tag</th>
                    <th>Time</th>
                    <th>Dev Description</th>
                </tr>
                </thead>
                <tbody>
                {tsItems}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTs;