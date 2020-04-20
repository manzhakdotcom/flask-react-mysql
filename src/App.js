import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Dashboard from "./containers/Dashboar/Dashboard";
import ArchiveData from "./containers/ArchiveData/ArchiveData";
import ArchiveTables from "./containers/ArchiveTables/ArchiveTables";
import ArchiveTypes from "./containers/ArchiveTypes/ArchiveTypes";
import {Container, Row} from "react-bootstrap";


class App extends Component {
    render() {
        return (
            <Container style={{ marginTop: 20 }}>
                <Row className="justify-content-md-center">
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/archive-type" component={ArchiveTypes}/>
                        <Route exact path="/archive-type/:type" component={ArchiveTables}/>
                        <Route exact path="/archive-type/:type/:table" component={ArchiveData}/>
                    </Switch>
                </Row>
            </Container>
        );
    }
}

export default App;
