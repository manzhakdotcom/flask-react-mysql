import React, {Component} from 'react';
import './ArchiveTypes.scss'
import {TYPES} from '../../constants/Constants'
import Type from "../../components/Type/Type";
import {Redirect} from 'react-router-dom';
import {Col, ListGroup} from "react-bootstrap";



class ArchiveTypes extends Component {

    state = {
        selectedType: '',

    };

    renderRedirect = () => {
        if (this.state.selectedType !== '') {
            return (
                <Redirect
                    to={`/archive-type/${this.state.selectedType}`}
                />
            );
        }
    };

    selectedTableHandler = archiveType => {
        this.setState({selectedType: archiveType});
    };

    render() {
        const types = TYPES.map((type, index) => {
            return (
                <Type
                    key={index}
                    name={type.label}
                    type={type.type}
                    goToTableList={this.selectedTableHandler}
                />)
        });
        return (
            <Col md lg="4">
                {this.renderRedirect()}
                <ListGroup>
                    {types}
                </ListGroup>
            </Col>


        );
    }
}

export default ArchiveTypes;