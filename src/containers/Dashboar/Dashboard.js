import React, {Component} from 'react';
import './Dashboard.scss'
import {Button, Jumbotron} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Архив данных</h1>
                    <p>
                        Здесь можно узнать информацию о архиве за определенных период времени.
                    </p>
                    <p>
                        <NavLink exact to="/archive-type">
                            <Button variant="primary">Тип таблицы</Button>
                        </NavLink>
                    </p>
                </Jumbotron>
            </>
        );
    }
}

export default Dashboard;