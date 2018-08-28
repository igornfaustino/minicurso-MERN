import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './login.css';

export default class Login extends Component {

    render() {
        return (
            <div>
                <div className="text-center body">
                    <Form className="form-signin form">
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                        <Input
                            type="email"
                            name="email"
                            required
                            placeholder="Digite seu e-mail"
                            style={{ marginTop: "25%" }} />

                        <Input type="password"
                            name="password"
                            required
                            placeholder="Digite sua senha" />

                        <Button
                            className="btn btn-info btn-color margin-button"
                            type="submit" color="primary">
                            Entrar!
            </Button>
                        <Button color="secondary">Cadastre-se!</Button>

                    </Form>
                </div>
            </div>
        );
    }

}