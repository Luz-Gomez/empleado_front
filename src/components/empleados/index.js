import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import EmpleadosBuscar from './crud/buscar';
import EmpleadosCrear from './crud/crear';
import EmpleadosEditar from './crud/editar';
import './empleados.css';

export default class Empleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTab: 'Buscar',
        };
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(tab){
        this.setState({ currentTab: tab });
    }

    render() { 
        return ( 
            <Container id="empleados-container">
            <Row>
            <Nav fill variant="tabs" 
                defaultActiveKey="Buscar"
                onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
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
                { this.state.currentTab === 'Buscar' ? (
                <EmpleadosBuscar 
                    changeTab={this.changeTab}
                    setIdEmpleado={this.setIdEmpleado}
                /> 
                ) : this.state.currentTab === 'Crear' ? (
                    <EmpleadosCrear changeTab={this.changeTab} />
                ) : (
                    <EmpleadosEditar 
                        changeTab={this.changeTab}
                        getIdEmpleado={this.getIdEmpleado} 
                    />
                )}
            </Row>
            </Container>
         );
    }
}
