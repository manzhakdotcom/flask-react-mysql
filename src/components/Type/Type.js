import React from 'react';
import {ListGroup} from "react-bootstrap";

const Type = (props) => {
    return (


        <ListGroup.Item
            onClick={() => props.goToTableList(props.type)}
        >
            {props.name}
        </ListGroup.Item>
    )
};

export default Type;