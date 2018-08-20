const express = require('express');
const ToDo = require('../models/todo')
const Joi = require('joi')
const validator = require('express-joi-validation')({})

Joi.objectId = require('joi-objectid')(Joi);
const router = express.Router();
const bodyValidator = Joi.object({
    listName: Joi.string().required(),
    toDo: Joi.array().items(Joi.object({
        item: Joi.string().required(),
        desc: Joi.string(),
        checked: Joi.bool().required()
    }))
})
const paramsValidator = Joi.object({
    id: Joi.objectId().required()
})

router.get('/todo/:id', validator.params(paramsValidator), function (req, res) {
    ToDo.getTodoById(req.params.id, function (err, todo) {
        if (err) {
            console.log(err)
            return res.status(400).send('server could not understand the request')
        }
        res.status(200).json(todo)
    })
})

router.get('/todos', function (req, res) {
    ToDo.getAllTodos(function (err, todos) {
        if (err) {
            console.log(err)
            return res.status(400).send('server could not understand the request')
        }
        res.status(200).json(todos)
    })
})

router.post('/todo', validator.body(bodyValidator), function (req, res) {
    let newTodo = {}
    newTodo.toDo = req.body.toDo
    newTodo.listName = req.body.listName
    ToDo.addTodo(newTodo, function (err, todo) {
        if (err) {
            console.log(err)
            return res.status(400).send('server could not understand the request')
        }
        res.status(201).json(todo)
    })
})

router.put('/todo/:id', validator.params(paramsValidator), validator.body(bodyValidator), function (req, res) {
    let updatedTodo = {}
    updatedTodo._id = req.params.id
    updatedTodo.toDo = req.body.toDo
    updatedTodo.listName = req.body.listName
    ToDo.updateTodo(updatedTodo, function (err, todo) {
        if (err) {
            console.log(err)
            return res.status(400).send('server could not understand the request')
        }
        res.status(200).json(todo)
    })
})

router.delete('/todo/:id', validator.params(paramsValidator), function (req, res) {
    ToDo.getAllTodos(function (err, todos) {
        ToDo.deleteTodo(req.params.id, function (err, todo) {
            if (err) {
                console.log(err)
                return res.status(400).send('server could not understand the request')
            }
            res.status(203).send()
        })
    })
})

module.exports = {
    path: '/',
    router: router
} 