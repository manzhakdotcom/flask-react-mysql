import React, {Component} from 'react';
import Layout from "../hoc/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "../containers/Home";
import ListOfArchiveTables from "../containers/ListOfArchiveTables/ListOfArchiveTables";
import ListOfItemFromArchiveTable from "../containers/ListOfItemFromArchiveTable/ListOfItemFromArchiveTable"


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/:type' component={ListOfArchiveTables}/>
                    <Route exact path='/:type/:table' component={ListOfItemFromArchiveTable}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </ Layout>
        );
    }
}

export default App;
