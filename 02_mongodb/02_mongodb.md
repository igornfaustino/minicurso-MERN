% Minicurso MERN: MongoDB
% Claudia L. P. Sampedro; Igor N. Faustiono
% Haken Empresa Junior

# Introdução

## NoSQL
- é um banco de dados não relacional
- Mais rapido
- Redundancia de dados

## Coleções
- As "tabelas" são chamadas de coleções
    - Representam uma coleção de objetos

## Objetos
- São os dados propriamente ditos
    - Em uma mesma coleção, os objetos não precisam seguir a mesma estrutura

# Exemplo

```
- Coleção de Pessoas
    |
    -- Pessoa1 (Nome, Telefone, Amigos)
    |
    -- Pessoa2 (Nome, Sobrenome)
    |
    -- Pessoa3 (Nome, Emprego, NomeCachorro)
```

# MongoDB

- Armajena objetos na estrutura `JSON`
- Cada objeto pode ter até 16 MB de tamanho
- Alta performace
- Facil para escalar

# Mongoose

- Ajuda a manipular o MongoDB e seus objetos em projetos de NodeJS

``` js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```

# Models

- Modelos dos dados

``` js
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema)
const User = mongoose.model('User', UserSchema)

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback)
}

module.exports.getUserByEmail = function (email, callback) {
    User.find({email: email}, callback)
}

module.exports.addUser = function (user, callback) {
    User.create(user, callback)
}

module.exports.updateUser = function (updateUser, callback) {
    User.getUserById(updateUser._id, (err, user) => {
        user.email = (updateUser.email && updateUser.email != user.email) ? updateUser.email: user.email
        user.password = (updateUser.password && updateUser.password != user.password) ? updateUser.password: user.password
        user.save(callback)
    })
}

module.exports.deleteUser = function (id, callback) {
    User.deleteOne({_id: id}, callback)
}
```