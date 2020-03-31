import React, {Component} from "react";
import classname from './Archive.css'
import { getList } from '../../components/DataArchive/DataArchive'
import classes from "../../hor/Layout/Layout.css";

class Archive extends Component {
    state = {
        id: '',
        term: '',
        editDisabled: false,
        items: []
    };

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

    render() {
        return (
            <div className={classname.Archive}>
                <h4>Archive</h4>
                <table className={classes.Layout}>
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
            </div>
        );
    }
}

export default Archive