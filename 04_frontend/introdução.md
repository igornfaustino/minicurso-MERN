% Minicurso MERN: Back-end
% Claudia L. P. Sampedro; Igor N. Faustiono
% Haken Empresa Junior


# Introdução ao React

- Biblioteca JavaScript para interfaces
- HTML + CSS + JavaScript
- Vantagens de uso
- Instalação pelo NPM


# Primeiros passos

- Criar ou acessar a pasta do projeto
- Abrir essa pasta em um terminal

``` bash
$ sudo npm install -g create-react-app
$ create-react-app nome-do-app
$ cd nome-do-app
$ npm start
```
```bash
$ npm i
```


# Organização das pastas

- node_modules
- public
- src
    - `App.js`
    - `index.js`

Criar dentro da pasta src pastas com os nomes: 
- components
- pages


# Trabalhando com componentes e páginas

- O que são

- Exemplo:

``` js
import React, { Component } from 'react';
import './MyComponent.css';

export default class MyComponent extends Component {

  funcoes_variadas(){}  

  render() {
    return (
        // HTML-CSS desejado
    );
  }
}
```


# Reacstrap

- O que é
- Instalação:
``` bash
$ npm install bootstrap --save
$ npm install --save reactstrap react react-dom
```
- Importar no arquivo `index.js`
``` js
import 'bootstrap/dist/css/bootstrap.min.css';
```
- Link daora
https://reactstrap.github.io/components/

