import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios';
export default class NewList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listName: '',
            desc: '',
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    submitRequest = () => {
        axios.post('todo', {
            listName: this.state.listName,
            desc: this.state.desc
        }).then((res) => {
            alert('Lista criada com sucesso!')
            this.props.updateList()
            this.props.toggle()
        }).catch((ex) => {
            console.error(ex)
        })
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Nova Lista</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text"
                                    name="listName"
                                    value={this.state.listName}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Digite o nome da lista" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text"
                                    name="desc"
                                    value={this.state.desc}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder="Digite a descrição da lista" />
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
