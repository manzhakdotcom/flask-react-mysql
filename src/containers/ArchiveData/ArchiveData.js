import React, {Component} from 'react';
import * as serverApi from '../../services/serverApi'
import './ArchiveData.scss'
import {Button} from "react-bootstrap";
import RenderData from "../../components/Data/RenderData";

class ArchiveData extends Component {
    state = {
        archiveData: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {

        console.log(this.props.match.params);

        if (this.props.match.params) {
            try {
                const archiveData = await serverApi.getListOfData(
                    this.props.match.params.type, this.props.match.params.table
                );
                this.setState({archiveData, loading: false});
            } catch (err) {
                this.setState({loading: false, error: true});
            }
        }
    }

    render() {
        const {archiveData} = this.state;
        console.log('archiveData',archiveData);
        return (
            <>
                <Button
                    variant="light"
                    onClick={() => this.props.history.push(`/archive-type/${this.props.match.params.type}`)}
                >
                    Назад
                </Button>
                <RenderData
                    type={this.props.match.params.type}
                    data={archiveData}
                />
            </>
        );
    }
}

export default ArchiveData;