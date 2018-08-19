import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Container} from 'reactstrap'
import Singup from '../../components/modal_singup/singup';
import "./login.css";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    submitRequest() {

    }

    render() {
        return (
            <div align="center">
                <Container className="border margin">
                    <Form>
                        <FormGroup >
                            <Col sm={3}>
                                <Input type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Digite seu e-mail" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={3}>
                                <Input type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Digite sua senha" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={3}>
                                <Button type="submit" color="primary" disabled={!this.validateForm()} onClick={this.submitRequest}>Entrar!</Button>
                            </Col>
                        </FormGroup>
                        {/* Modal para cadastro */}
                        <FormGroup>
                            <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Cadastre-se!</Button>
                        </FormGroup>

                        <Singup modal={this.state.modal} toggle={this.toggle}/>
                    </Form>
                </Container>
            </div>
        );
    }
}

