import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from "axios";

export default class Singup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirm_password: '',
        };

    }

    validateForm() {
        var password_valid = true;
        if (this.state.password != this.state.confirm_password) {
            password_valid = false;
        }
        return this.state.email.length > 0 &&
            this.state.password.length > 6 &&
            password_valid == true;
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    submitRequst = async () => {
        let res = await axios.post('/user/register', {
            email: this.state.email,
            password: this.state.password,
        })
        console.log(res)
        if (res.status !== 201) {
            return alert("Alguma coisa está errada");
        }
        this.setState({
            email: '',
            password: ''
        });
        alert("Usuário cadastrado")
        this.props.toggle()
    }

    render() {
        return (

            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Cadastro de usuário</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Digite seu e-mail" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Digite sua senha" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="password"
                                    name="confirm_password"
                                    value={this.state.confirm_password}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Confirme sua senha" />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={!this.validateForm()} onClick={this.submitRequst}>Cadastrar</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
        )
    }
}