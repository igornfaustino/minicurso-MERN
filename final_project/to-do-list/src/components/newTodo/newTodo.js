import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios';
export default class NewTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: '',
            desc: '',
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    submitRequest  = () =>{
        this.props.add({item: this.state.item, desc: this.state.desc, checked:false})
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Nova tarefa:</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text"
                                    name="item"
                                    value={this.state.listName}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Nome" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text"
                                    name="desc"
                                    value={this.state.desc}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder="Descrição" />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.submitRequest}>Criar</Button>
                </ModalFooter>
            </Modal>
        );
    }

}
