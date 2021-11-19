import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            empleados: { 
                nombre: "",
                apellido_p: "",
                apellido_m: "",
                telefoono: "",
                mail: "",
                direccion: "",
            }
         };
    }

    setValue(index, value) {
        this.setState({
            empleados: {
                ...this.state.empleados,
                [index] : value,
            },
        });
    }
    render() { 
        return ( 
            <Container id="empleados-crear-container">
                <Row>
                    <h2> Crear Empleados </h2>
                </Row>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="empleados-label">Nombre</Form.Label>
                    <Form.Control 
                        onChange={(e) => this.setValue('nombre', e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="empleados-label">Primer Apellido</Form.Label>
                    <Form.Control 
                        onChange={(e) => this.setValue('apellido_p', e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="empleados-label">Segundo Apellido</Form.Label>
                    <Form.Control 
                        onChange={(e) => this.setValue('apellido_m', e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="empleados-label">Telefono</Form.Label>
                    <Form.Control 
                        onChange={(e) => this.setValue('telefono', e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="empleados-label">Mail</Form.Label>
                    <Form.Control 
                        onChange={(e) => this.setValue('mail', e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="empleados-label">Direccion</Form.Label>
                    <Form.Control 
                        onChange={(e) => this.setValue('direccion', e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={() => console.log(this.state)} >
                    Guardar
                </Button>
                </Form>
            </Container>
        );
    }
}
