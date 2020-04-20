import React, {Component} from 'react';
import * as serverApi from '../../services/serverApi'
import './ArchiveData.scss'
import {Button, Col} from "react-bootstrap";
import RenderData from "../../components/Data/RenderData";
import TableList from "../../components/Table/TableList";

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
        const {archiveData, error, loading} = this.state;

        let info;

        if (error) {
            info = (
                <p>Ошибка получения данных.</p>
            );
        }

        if (loading) {
            info = (
                <p>Загрузка...</p>
            );
        }

        if (archiveData.length > 0) {
            info = (
                <RenderData
                    type={this.props.match.params.type}
                    data={archiveData}
                />
            );
        }

        console.log('archiveData',archiveData);
        return (
            <Col xs lg="8">
                <Button
                    style={{ marginBottom: 20 }}
                    variant="light"
                    onClick={() => this.props.history.push(`/archive-type/${this.props.match.params.type}`)}
                >
                    Назад
                </Button>
                {info}
            </Col>
        );
    }
}

export default ArchiveData;