import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class EditList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            listName: this.props.listName,
            desc: this.props.desc,
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    render() {
        return (

            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Editar Lista</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text"
                                    name="listName"
                                    value={this.state.listName}
                                    onChange={(event) => this.handleChange(event)}
                                    required
                                    placeholder="Digite o novo nome da lista" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="text"
                                    name="desc"
                                    value={this.state.desc}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder="Digite sua senha" />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        this.props.edit(this.props.id, {
                            listName: this.state.listName,
                            desc: this.state.desc
                        })
                        this.props.toggle()
                    }}>Salvar</Button>
                </ModalFooter>
            </Modal>
        )
    }

}