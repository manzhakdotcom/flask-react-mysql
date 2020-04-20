import React, {Component} from 'react';
import * as serverApi from '../../services/serverApi'
import './ArchiveTables.scss'
import TableList from '../../components/Table/TableList'
import {Button, Col} from "react-bootstrap";

class ArchiveTables extends Component {
    state = {
        archiveTables: [],
        archiveType: '',
        loading: true,
        error: false,
    };

    async componentDidMount() {
        if (this.props.match.params) {
            try {
                const archiveTables = await serverApi.getTablesList(
                    this.props.match.params.type,
                );
                this.setState({archiveTables, archiveType: this.props.match.params.type,loading: false});
            } catch (err) {
                this.setState({loading: false, error: true});
            }
        }
    }

    render() {
        const {archiveTables, archiveType, loading, error} = this.state;

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

        if (archiveTables.length > 0) {
            info = (
                <TableList
                    tables={archiveTables}
                    type={archiveType}
                />
            );
        }

        return (
            <Col md lg="4">
                <Button
                    style={{ marginBottom: 20 }}
                    variant="light"
                    onClick={() => this.props.history.push('/archive-type')}
                >
                    Назад
                </Button>
                {info}
            </Col>
        );
    }
}

export default ArchiveTables;