import React, {Component, Fragment} from 'react';
import * as serverApi from '../../services/serverApi'
import './ArchiveTables.scss'
import TableList from '../../components/Table/TableList'
import {Button, Col} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";

class ArchiveTables extends Component {
    state = {
        archiveTables: [],
        archiveType: '',
        loading: true,
        error: false,
        currentPage: 1,
        tablesPerPage: 35,
    };

    async componentDidMount() {
        if (this.props.match.params) {
            try {
                const archiveTables = await serverApi.getTablesList(
                    this.props.match.params.type,
                );
                this.setState({
                    archiveTables,
                    archiveType: this.props.match.params.type,
                    loading: false
                });
                if(archiveTables === null){
                    this.setState({error:true})
                }
            } catch (err) {
                this.setState({
                    loading: false,
                    error: true
                });
            }
        }
    }

    render() {
        const {
            archiveTables,
            archiveType,
            loading,
            error,
            currentPage,
            tablesPerPage
        } = this.state;

        const indexOfLastPost = currentPage * tablesPerPage;
        const indexOfFirstPost = indexOfLastPost - tablesPerPage;
        const indexTables = (currentPage - 1) * tablesPerPage;

        const paginate = (e, pageNumber) => {
            e.preventDefault();
            this.setState({currentPage: pageNumber});
        };

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

        if (archiveTables !== null && archiveTables.length > 0) {
            const currentTables = archiveTables.slice(indexOfFirstPost, indexOfLastPost);
            info = (
                <Fragment>
                    <Pagination
                        tablesPerPage={tablesPerPage}
                        totalTables={archiveTables.length}
                        paginate={paginate}
                    />
                    <TableList
                        tables={currentTables}
                        type={archiveType}
                        index={indexTables}
                    />
                </Fragment>
            );
        }

        return (
            <Col md lg="4">
                <div className="text-center">
                    <Button
                        style={{marginBottom: 20}}
                        variant="light"
                        onClick={() => this.props.history.push('/archive-type')}
                    >
                        Назад
                    </Button>
                </div>
                {info}
            </Col>
        );
    }
}

export default ArchiveTables;