% Minicurso MERN: Validação e Login
% Claudia L. P. Sampedro; Igor N. Faustiono
% Haken Empresa Junior

# JOI

- Validar campos enviados pelo usuario,
- Converte valores caso necessario
- `express-joi-validation` é um MW para usar o JOI

## Instalação
- `npm i express-joi-validation joi --save`

# Forma de usar

``` js
const Joi = require('joi')
const validator = require('express-joi-validation')({})
 
const bodyValidator = Joi.object({
    listName: Joi.string().required(),
    toDo: Joi.array().items(Joi.object({
        item: Joi.string().required(),
        desc: Joi.string(),
        checked: Joi.bool().required()
    }))
})
 
router.post('/todo', validator.body(bodyValidator), function (req, res) {
    ...
})
```

# Extra: Validar ID do mongo

``` js
var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const paramsValidator = Joi.object({
    id: Joi.objectId().required()
})
```

## Requisito
- joi-objectid
- `npm install joi-objectid --save`

# Login

- Login utilizando JWT e passport

## Requisitos
- `npm i -s passport passport-jwt bcrypt jsonwebtoken`