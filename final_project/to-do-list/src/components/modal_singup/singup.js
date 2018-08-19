import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

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
        if (this.state.password.length != this.state.confirm_password.length) {
            password_valid = false;
        }
        else {
            for (var i = 0; i < this.state.password.length; i++) {
                if (this.state.password[i] != this.state.confirm_password[i]) {
                    password_valid = false;
                }
            }
        }
        return this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.confirm_password > 0 &&
            password_valid == true;
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    onClick(event){
        this.props.toggle;
        this.submitRequst();
    }

    submitRequst(){

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
                                    placeholder="Digite seu e-mail"/>
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
                    <Button color="primary" disabled={!this.validateForm()} onClick={this.onClick()}>Cadastrar</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
        )
    }
}