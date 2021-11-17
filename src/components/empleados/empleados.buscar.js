import React from 'react';
import { request } from '../helper/helper';
import { Container, Row, Col } from 'react-bootstrap';
import './empleados.css';

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <Container id="empleados-buscar-container">
                <Row>
                    <h2> BUSCAR EMPLEADOS</h2>
                </Row>
            </Container>
        );
    }
}

 
