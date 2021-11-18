import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './empleados.css';
import DataGrid from '../grid/grid'

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

    }

    render() {


        return (
            <Container id="empleados-buscar-container">
                <Row>
                    <h2> BUSCAR EMPLEADOS</h2>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        );
    }
}
