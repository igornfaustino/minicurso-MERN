const express = require('express')
const User = require('../models/user')
// const bcript = require('bcrypt')
// const Joi = require('joi')
// const validator = require('express-joi-validation')({})

const router = express.Router();
// const saltRounds = 10;
// const bodyValidator = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
// })

// router.post('/register', validator.body(bodyValidator), function (req, res) {

// })

// router.post('/auth', validator.body(bodyValidator), function (req, res) {

// })

module.exports = router