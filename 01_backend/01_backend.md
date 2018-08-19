% Minicurso MERN: Back-end
% Claudia L. P. Sampedro; Igor N. Faustiono
% Haken Empresa Junior

# Introdução ao Node JS

- Javascript desvinculado do navegador
- Orientado a eventos
- Open source
- Construido em cima do motor V8

# Primeiros passos

- Crie uma pasta para o projeto `meu_primeiro_projeto`
- Crie um arquivo `index.js`

``` js
console.log("Ola Mundo")
```

- Execute o programa: `node index.js`

# Função Callback

``` js
function soma(n1, n2, callback) {
    callback(n1+n2)
}

soma(1, 2, (res) => {
    console.log(res)
})

soma(2, 3, function (res) {
    console.log(res)
})
```


# NPM

- Gerenciador de pacotes do Node
- Comandos:

``` bash
$ npm init # inicia o npm em um repositorio
$ npm install # instala dependencias
$ npm run SCRIPT # executa um script
```

# Iniciando o projeto

- Criar um repositorio: `todoList`
- Iniciar npm no repositorio: `npm init`
- Criar um arquivo `server.js`
- instalar express `npm i -s express`

# Express

- Framework para aplicativos web
    - Abstrai complexidades do modulo HTTP

```js
const express = require('express')
const port = 8080
const server = express()

server.listem(port, function(){
    console.log("Server rodando na porta", port)
})
```

# Rotas

- As rotas são as URLs que o servidor será capaz de responder

``` js
server.get('/', function (req, res) {
    res.send('Hello SEINFO 2018')
})
```


## Explicando o codigo:
- O servidor estará pronto para responder mensagens do tipo `GET` na URL `/`.
- Ao receber uma requisição (`req`), ele dará a resposta (`res`), enviando a mensagem `'hello SEINFO 2018'`

# Middlewares

- Mediadores entre as requisições

``` js
server.get('/', function(req, res, next) {
    console.log('Sou um MD')
    next()
}, function (req, res) {
    res.send('Hello SEINFO 2018')
})
```

# Body-parser

- MW para facilitar a extração do corpo da requisição

- Instalando: `$ npm i -s body-parser`

``` js
const bodyParser = require('body-parser')

// parse application/json
server.use(bodyParser.json()
```

# CORS

- MW Para autorizar troca de mensagens entre dominios externos

```js
const cors = require('cors')

server.use(cors())
```