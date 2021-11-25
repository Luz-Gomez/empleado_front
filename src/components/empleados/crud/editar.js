import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../Loading/Loading';
import '../empleados.css';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            empleado: {
                nombre: '',
                apellido_p: '',
                apellido_m: '',
                telefoon: '',
                direccion: '',
            },
        };
    }

    setValue(index, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [index]: value,
            },
        });
    }

    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .post('/empleados', this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab('buscar');
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    render() {
        return (
            <Container id="empleados-crear-container">
                <Loading show={this.state.loading} />
                <Row>
                    <h2> Editar Empleados </h2>
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

                    <Button
                        variant="primary"
                        onClick={() => console.log(this.guardarEmpleados())}
                    >
                        Guardar Empleado
                    </Button>
                </Form>
            </Container>
        );
    }
}
