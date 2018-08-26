
# Criando página de Login

- Criar pasta `login` dentro da página `pages`
- Criar os arquivos `login.js` e `login.css` 
- Dentro do arquivo `login.js` digitar:

``` js
import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

  render() {
    return ( 

    );
  }
}
```


## Importando o reactstrap e criando o formulário para login
- Para importar os componentes do reactstraps necessários para essa página
``` js
import {Button, Form, Input} from 'reactstrap'
```
- Criando o formulário para login
``` html
return ( 
    <div>
        <div>
            <Form>
                <h1>Login</h1>

                <Input 
                    type="email"
                    name="email"
                    required
                    placeholder="Digite seu e-mail" />

                <Input 
                    type="password"
                    name="password"
                    required
                    placeholder="Digite sua senha" />

                <Button type="submit" color="primary">Entrar!</Button>
                <Button color="secondary">Cadastre-se!</Button>

            </Form>
        </div>
    </div>
);
```


## Adicionando CSS ao formulário

- Como criar uma classe CSS
```css
.nomeDaClasse{
    propriedade1: valor;
    propriedadeN: valor;
}
```
- Chamando a classe no HTML usando React
```html
<className="nomeDaClasse">
```

- Link para o arquivo CSS usado nesta página: 
    - https://github.com/igornfaustino/minicurso-MERN/blob/master/final_project/to-do-list/src/pages/login/login.css

- Chamando as classes CSS no HTML já feito
``` html
<div>
    <div className="text-center body">
        <Form className="form-signin form">
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>

            <Input 
                type="email"
                name="email"
                required
                placeholder="Digite seu e-mail" 
                style={{marginTop: "25%"}} />

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
  ```

  ## Acessando os valores digitados nos inputs

- Armazenando os valores
  - Constructor

``` js
export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }
}
```
- Adicionando campo `value` ao HTML

```js
value={this.state.NomeNoConstructor}
```

- Adicionando função para receber o valor digitado pelo usuário no HTML

```js
onChange={(event) => this.handleChange(event)}
```
- Criando a função handleChange

```js
handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
}
```

## Funções de validação 

- Qual a finalidade?
- Validações feitas neste projeto
- Função de validação

```js
validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 3;
}
```
- Mudanças necessárias no botão `Entrar!`
```js
disabled={!this.validateForm()}
```

## Envio para o back

- Axios

```js
import axios from 'axios';
```

- Mudança no `index.js`
```js
axios.defaults.baseURL = "http://localhost:8080/api"
```

- Função para logar

```js
submitRequest = event => {
    event.preventDefault();
    axios.post("/user/auth", {
        email: this.state.email,
        password: this.state.password
    }).then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers = {
            "Authorization": localStorage.getItem("token")
        }
        this.props.history.push('/'); //Ainda não irá funcionar
    }).catch(ex => {
        console.log(ex)
        alert("Usuario não cadastrado!")
    })
};
```
- Mudança no botão `Entrar!`

```js
onClick={this.submitRequest}
```

- Adicionando rotas ao `App.js`

```js
import { Switch, Route, BrowserRouter } from 'react-router-dom'

<BrowserRouter>
<Switch>
    <Route path="/login" component={Login} />
</Switch>
</BrowserRouter>
```

