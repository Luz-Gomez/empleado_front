import React from 'react';
import { request } from '../helper/helper';
import { Container, Row, Col } from 'react-bootstrap';
import './empleados.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

const products = [
    {   id: 1, name: 'Producto1', price: 1000, },
    {   id: 2, name: 'Producto2', price: 2000, },
    {   id: 3, name: 'Producto3', price: 3000, },
    {   id: 4, name: 'Producto4', price: 4000, },
    {   id: 5, name: 'Producto5', price: 5000, },
    {   id: 6, name: 'Producto6', price: 6000, },
    {   id: 7, name: 'Producto7', price: 7000, },
    {   id: 8, name: 'Producto8', price: 8000, },
    {   id: 9, name: 'Producto9', price: 9000, },    
    {   id: 11, name: 'Producto11', price: 1000, },
    {   id: 12, name: 'Producto12', price: 2000, },
    {   id: 13, name: 'Producto13', price: 3000, },
    {   id: 14, name: 'Producto14', price: 4000, },
    {   id: 15, name: 'Producto15', price: 5000, },
    {   id: 16, name: 'Producto16', price: 6000, },
    {   id: 17, name: 'Producto17', price: 7000, },
    {   id: 18, name: 'Producto18', price: 8000, },
    {   id: 19, name: 'Producto19', price: 9000, },  
    {   id: 21, name: 'Producto21', price: 1000, },
    {   id: 22, name: 'Producto22', price: 2000, },
    {   id: 23, name: 'Producto23', price: 3000, },
    {   id: 24, name: 'Producto24', price: 4000, },
    {   id: 25, name: 'Producto25', price: 5000, },
    {   id: 26, name: 'Producto26', price: 6000, },
    {   id: 27, name: 'Producto27', price: 7000, },
    {   id: 28, name: 'Producto28', price: 8000, },
    {   id: 29, name: 'Producto29', price: 9000, },    
    {   id: 41, name: 'Producto41', price: 1000, },
    {   id: 42, name: 'Producto42', price: 2000, },
    {   id: 43, name: 'Producto43', price: 3000, },
    {   id: 44, name: 'Producto44', price: 4000, },
    {   id: 45, name: 'Producto45', price: 5000, },
    {   id: 46, name: 'Producto46', price: 6000, },
    {   id: 47, name: 'Producto47', price: 7000, },
    {   id: 48, name: 'Producto48', price: 8000, },
    {   id: 49, name: 'Producto49', price: 9000, },    
];

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
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
            totalSize: products.length
        };

        return (
            <Container id="empleados-buscar-container">
                <Row>
                    <h2> BUSCAR EMPLEADOS</h2>
                </Row>
                <Row>
                    <ToolkitProvider
                        keyField="tp"
                        data={products}
                        columns={columns}
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
                                        data={products}
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
                </Row>
            </Container>
        );
    }
}
