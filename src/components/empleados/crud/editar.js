import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../Loading/Loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPrompts from '../../prompts/confirmation';
import '../empleados.css';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation:{
                title: '',
                text: '',
                show: false,
            },
            loading: false,
            empleado: {
                nombre: '',
                apellido_p: '',
                apellido_m: '',
                telefono: '',
                mail: '',
                direccion: '',
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    componentDidMount(){
        this.getEmpleado();
    }

    getEmpleado() {
        this.setState({ loading: true });
        request
        .get(`/empleados/${this.state.idEmpleado}`)
        .then((response) => {
            this.setState({ 
                empleado: response.data,
                loading: false,
            });
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: false });
        });
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
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab('Buscar');
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('Buscar')
    }

    onCancel(){
        alert('cancelar');
    }

    onConfirm(){
        this.setState(
        {
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        },
        this.guardarEmpleados()
        );
    }

    render() {
        return (
            <Container id="empleados-editar-container">
                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2000}
                    onExited={this.onExitedMessage}
                />
                <ConfirmationPrompts 
                    text={this.state.confirmation.text}
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2> Editar Empleados </h2>
                </Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="empleados-label">Nombre</Form.Label>
                        <Form.Control
                            value={this.state.empleado.nombre}
                            onChange={(e) => this.setValue('nombre', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="empleados-label">Primer Apellido</Form.Label>
                        <Form.Control
                            value={this.state.empleado.apellido_p}
                            onChange={(e) => this.setValue('apellido_p', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="empleados-label">Segundo Apellido</Form.Label>
                        <Form.Control
                            value={this.state.empleado.apellido_m}
                            onChange={(e) => this.setValue('apellido_m', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="empleados-label">Telefono</Form.Label>
                        <Form.Control
                            value={this.state.empleado.telefono}
                            onChange={(e) => this.setValue('telefono', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="empleados-label">Mail</Form.Label>
                        <Form.Control
                            value={this.state.empleado.mail}
                            onChange={(e) => this.setValue('mail', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="empleados-label">Direccion</Form.Label>
                        <Form.Control
                            value={this.state.empleado.direccion}
                            onChange={(e) => this.setValue('direccion', e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        onClick={() => 
                            this.setState({
                                confirmation: { ...this.state.confirmation, show: true },
                            })
                        }
                    >
                        Guardar Cambios
                    </Button>
                </Form>
            </Container>
        );
    }
}
