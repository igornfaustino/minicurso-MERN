
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


# Importando o reactstrap e criando o formulário para login
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


# Adicionando CSS ao formulário

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
``` html
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
  
