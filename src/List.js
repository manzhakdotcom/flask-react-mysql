import React, { Component } from 'react'
import { getList } from './ListFunc'

class List extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: []
        };

    }

    componentDidMount () {
        this.getAll()
    }


    getAll = () => {
        getList().then(data => {
            this.setState({
                term: '',
                items: [...data]
            },
                () => {
                    console.log(this.state.term)
                })
        })
    };


    render () {
        return (
            <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                <tbody>
                    {this.state.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default List