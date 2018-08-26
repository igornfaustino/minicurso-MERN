# Criando modal para cadastro

- Criar uma pasta para o componente, com o nome de `modal_singup`, com o arquivo `singup.js`

- Adicionar os importes ao `singup.js` e exportar a classe

```js
import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from "axios";

export default class Singup extends Component {}
```

- Criando seu construtor

```js
constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        confirm_password: '',
    };
}
```

- HTML para o modal, propriedade toggle e props

```html
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
```

- Adicionar função para pegar os inputs do usuário

- Função de validação

```js
validateForm() {
    var password_valid = true;
    if (this.state.password != this.state.confirm_password) {
        password_valid = false;
    }
    return this.state.email.length > 0 &&
        this.state.password.length > 6 &&
        password_valid == true;
}
```

- Função para cadastrar o usuário

```js
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
```

## Chamando o modal na página de login

- Atualizar o construtor da página Login e criar função `toggle`

```js
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
```

- Criar botão para abrir formulário de cadastro e chamar o modal

```html
<Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Cadastre-se!</Button>

<Singup modal={this.state.modal} toggle={this.toggle} />
```
