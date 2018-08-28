const express = require('express')
const User = require('../models/user')
const bcript = require('bcrypt')
const Joi = require('joi')
const validator = require('express-joi-validation')({})

Joi.objectId = require('joi-objectid')(Joi);
const router = express.Router();
const saltRounds = 10;
const bodyValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

router.get('/', (req, res) => {
    res.send("teste")
})

router.post('/register', validator.body(bodyValidator), function (req, res) {
    let newUser = {}
    newUser.email = req.body.email
    newUser.password = req.body.password
    bcript.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return res.status(500).send()
        }
        bcript.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash
            User.addNewUser(newUser, (err, user) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send('server could not understand the request')
                }
                res.status(201).send("user register")
            })
        })
    })
})

router.post('/auth', validator.body(bodyValidator), function (req, res) {
    User.getUserByEmail(req.body.email, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).send('server could not understand the request')
        }
        bcript.compare(req.body.password, user.password, (err, same) => {
            if (same) {
                let _user = {}
                _user._id = user._id
                _user.email = user.email
                const token = require("../config/passport").generateToken(_user)
                res.status(200).json({
                    token: "bearer " + token,
                    user: _user
                })
            } else {
                res.status(401).send("Unauthorized")
            }
        })
    })
})

module.exports = router