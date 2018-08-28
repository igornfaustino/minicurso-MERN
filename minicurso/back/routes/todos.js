const express = require('express');
const router = express.Router();
const Todo = require("../models/todo")
const Joi = require("joi")
Joi.objectId = require("joi-objectid")(Joi)
const validator = require('express-joi-validation')({})

const bodyValidator = Joi.object({
    listName: Joi.string().required(),
    desc: Joi.string().allow(""),
    todos: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        desc: Joi.string().allow(""),
        checked: Joi.boolean().required()
    }))
})

const paramsValidator = Joi.object({
    id: Joi.objectId().required()
})

router.get('/todo/:id', validator.params(paramsValidator), function (req, res) {
    const id = req.params.id
    Todo.getTodoById(id, (err, todo) => {
        if (err) {
            return res.status(400).send()
        }
        res.status(200).json({
            todo: todo
        })
    })
})

router.get('/todos', function (req, res) {
    Todo.getAllTodos((err, todos) => {
        if (err) {
            return res.status(400).send()
        }
        res.status(200).json({
            todos: todos
        })
    })
})

router.post('/todo', validator.body(bodyValidator), function (req, res) {
    let todo = {}
    todo.listName = req.body.listName
    todo.desc = req.body.desc
    todo.todos = req.body.todos

    Todo.addTodo(todo, (err, todo) => {
        if (err) {
            return res.status(400).send()
        }
        res.status(201).json({
            todo: todo
        })
    })
})

router.put('/todo/:id', validator.params(paramsValidator),validator.body(bodyValidator), function (req, res) {
    const id = req.params.id
    let todo = {}
    todo.listName = req.body.listName
    todo.desc = req.body.desc
    todo.todos = req.body.todos

    Todo.updateTodo(id, todo, (err, todo) => {
        if (err) {
            return res.status(400).send()
        }
        res.status(200).json({
            todo: todo
        })
    })
})

router.delete('/todo/:id', validator.params(paramsValidator), function (req, res) {
    const id = req.params.id
    Todo.deleteTodo(id, (err, data) => {
        if (err) {
            return res.status(400).send()
        }
        res.status(203).send()
    })
})

module.exports = router