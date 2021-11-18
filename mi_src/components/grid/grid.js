import React from 'react';
import { request } from '../helper/helper';
import { Row, Col } from 'react-bootstrap';
import './../empleados/empleados.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount(){
        this.getData();
    }
    
    getData(){
        request
        .get('/empleados')
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render() {
        const options = {
            custom: true,
            totalSize: this.state.rows.length
        };

        return (
            <ToolkitProvider
            keyField = "tp"
            data = { this.state.rows }
            columns = { columns }
            search
            >
            {
                props => (
                    <>
                        <hr />
                        <PaginationProvider
                            pagination={paginationFactory(options)}
                        >
                            {
                                ({
                                    paginationProps,
                                    paginationTableProps
                                }) => (
                                    <>
                                    <Row>
                                        <Col>
                                            <SizePerPageDropdownStandalone {...paginationProps} />
                                        </Col>
                                        <Col>
                                            <SearchBar {...props.searchProps} />
                                        </Col>
                                    </Row>
                                    <BootstrapTable
                                        keyField="bt"
                                        data={ this.state.rows }
                                        columns={columns}
                                        {...paginationTableProps}
                                        {...props.baseProps}
                                    />
                                    <PaginationListStandalone {...paginationProps} />
                                    </>
                                )
                            }
                        </PaginationProvider>
                    </>
                )
            }
            </ToolkitProvider>
        );
    }
}
