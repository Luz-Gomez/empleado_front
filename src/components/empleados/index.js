import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import EmpleadosBuscar from './crud/buscar';
import EmpleadosCrear from './crud/crear';
import './empleados.css';

export default class Empleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTab: 'buscar'
        };
    }
    render() { 
        return ( 
            <Container id="empleados-container">
            <Row>
            <Nav fill variant="tabs" 
                defaultActiveKey="/buscar"
                onSelect={(evenKey) => this.setState({ currentTab: evenKey })}
            >
                <Nav.Item>
                     <Nav.Link eventKey="Buscar">Buscar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Crear">Crear</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>
            <Row>
                { this.state.currentTab === 'buscar' ? (
                <EmpleadosBuscar /> 
                ) : (
                    <EmpleadosCrear />
                ) }
            </Row>
            </Container>
         );
    }
}
