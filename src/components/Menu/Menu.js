import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Menu extends Component {
    state = {
        listTypeOfArchive: [
            {
                name: "tu",
                label: "TU"
            },
            {
                name: "ts",
                label: "TS"
            },
            {
                name: "ti",
                label: "TI"
            },
        ]
    };

    renderTypeLink() {
        return this.state.listTypeOfArchive.map((item, index) => {
            return (
                <li key={index} className={'nav-item'}>
                    <NavLink
                        className={'nav-link'}
                        to={'/' + item.name}
                    >
                        {item.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        console.log(this.props);
        return (
            <ul className={'nav justify-content-center'}>
                {this.renderTypeLink()}
            </ul>
        );
    }
}

export default Menu;