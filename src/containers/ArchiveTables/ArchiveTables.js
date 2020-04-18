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

        console.log(this.props.match.params);

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
        const {archiveTables, archiveType} = this.state;

        console.log(archiveTables);

        let archiveTablesInfo;

        if (archiveTables.length > 0) {
            archiveTablesInfo = (
                <TableList
                    tables={archiveTables}
                    type={archiveType}
                />
            );
        }

        return (
            <Col md lg="4">
                <Button
                    variant="light"
                    onClick={() => this.props.history.push('/archive-type')}
                >
                    Назад
                </Button>
                {archiveTablesInfo}
            </Col>
        );
    }
}

export default ArchiveTables;