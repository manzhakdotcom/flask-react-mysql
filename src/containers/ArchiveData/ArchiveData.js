import React, {Component, Fragment} from 'react';
import * as serverApi from '../../services/serverApi'
import './ArchiveData.scss'
import {Button, Col} from "react-bootstrap";
import RenderData from "../../components/Data/RenderData";
import Pagination from "../../components/Pagination/Pagination";
import ReactPaginate from 'react-paginate';

class ArchiveData extends Component {
    state = {
        archiveData: [],
        loading: true,
        error: false,
        currentPage: 1,
        dataPerPage: 50,
    };

    async componentDidMount() {
        if (this.props.match.params) {
            try {
                const archiveData = await serverApi.getListOfData(
                    this.props.match.params.type, this.props.match.params.table
                );
                this.setState({
                    archiveData,
                    loading: false
                });
                if (archiveData === null) {
                    this.setState({error: true});
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
            archiveData,
            error,
            loading,
            currentPage,
            dataPerPage
        } = this.state;

        const indexOfLastPost = currentPage * dataPerPage;
        const indexOfFirstPost = indexOfLastPost - dataPerPage;
        const indexData = (currentPage - 1) * dataPerPage;


        const paginate = (pageNumber) => {
            this.setState({currentPage: pageNumber.selected+1});
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

        if (archiveData !== null && archiveData.length > 0) {
            const pageCount = Math.ceil(archiveData.length / dataPerPage);
            console.log('pageCount', pageCount);
            const currentData = archiveData.slice(indexOfFirstPost, indexOfLastPost);
            info = (
                <Fragment>
                    {/*<Pagination
                        tablesPerPage={dataPerPage}
                        totalTables={archiveData.length}
                        paginate={paginate}
                    />*/}
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={paginate}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        nextClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                    />
                    <RenderData
                        type={this.props.match.params.type}
                        data={currentData}
                        index={indexData}
                    />
                </Fragment>
            );
        }

        console.log('archiveData', archiveData);
        return (
            <Col xs lg="8">
                <div className="text-center">
                    <Button
                        style={{marginBottom: 20}}
                        variant="light"
                        onClick={() => this.props.history.push(`/archive-type/${this.props.match.params.type}`)}
                    >
                        Назад
                    </Button>
                </div>
                {info}
            </Col>
        );
    }
}

export default ArchiveData;