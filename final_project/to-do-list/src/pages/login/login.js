import React, { Component } from "react";
import {Button, Form, Input} from 'reactstrap'
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
        return this.state.email.length > 0 && this.state.password.length > 3;
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
            <div>
                <div className="text-center body">
                    <Form className="form-signin form">
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                        <Input 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this.handleChange(event)}
                            required
                            placeholder="Digite seu e-mail" 
                            style={{marginTop: "25%"}} />


                        <Input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={(event) => this.handleChange(event)}
                            required
                            placeholder="Digite sua senha" />

                        <Button className="btn btn-info btn-color margin-button" type="submit" color="primary" disabled={!this.validateForm()} onClick={this.submitRequest}>Entrar!</Button>

                        <Button color="secondary"  onClick={this.toggle}>{this.props.buttonLabel}Cadastre-se!</Button>

                        <Singup modal={this.state.modal} toggle={this.toggle} />
                    </Form>

                </div>
            </div>
        );
    }
}

