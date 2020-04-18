import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Dashboard.scss'

class Dashboard extends Component {

    render() {
        return (
            <>
                <div className="dashboard" data-testid="main__dashboard">
                    <div className="dashboard-card-wrapper">
                        <NavLink to="/tu">
                            <div>
                                <h1>TU</h1>
                            </div>
                        </NavLink>
                    </div>
                    <div className="dashboard-card-wrapper">
                        <NavLink to="/ts">
                            <div>
                                <h1>TS</h1>
                            </div>
                        </NavLink>
                    </div>
                    <div className="dashboard-card-wrapper">
                        <NavLink to="/ti">
                            <div>
                                <h1>TI</h1>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;