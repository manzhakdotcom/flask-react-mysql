import React, {Component} from 'react';
import './ArchiveTypes.scss'
import {TYPES} from '../../constants/Constants'
import Type from "../../components/Type/Type";
import {Redirect} from 'react-router-dom';
import {Button, Col, ListGroup} from "react-bootstrap";


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

    selectedTableHandler = selectedType => {
        this.setState({selectedType});
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
                <div className="text-center">
                    <Button
                        style={{marginBottom: 20}}
                        variant="light"
                        onClick={() => this.props.history.push('/')}
                    >
                        Назад
                    </Button>
                </div>
                {this.renderRedirect()}
                <ListGroup>
                    {types}
                </ListGroup>
            </Col>


        );
    }
}

export default ArchiveTypes;