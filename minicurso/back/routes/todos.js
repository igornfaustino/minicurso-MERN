const express = require('express');
const router = express.Router();
const Todo = require("../models/todo")

router.get('/todo/:id', function (req, res) {
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

router.post('/todo', function (req, res) {
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

router.put('/todo/:id', function (req, res) {

})

router.delete('/todo/:id', function (req, res) {

})

module.exports = router