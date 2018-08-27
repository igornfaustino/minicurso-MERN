const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    listName: { type: String, require: true },
    desc: String,
    todos: [
        {
            name: { type: String, require: true },
            desc: String,
            checked: Boolean
        }
    ]
})

module.exports = mongoose.model("Todo", todoSchema)
const Todo = mongoose.model("Todo", todoSchema)

module.exports.getTodoById = (id, callback) => {
    Todo.findOne({ _id: id }, callback)
}

module.exports.getAllTodos = (callback) => {
    Todo.find({}, callback)
}

module.exports.addTodo = (todo, callback) => {
    Todo.create(todo, callback)
}

module.exports.updateTodo = (id, updatedTodo, callback) => {
    Todo.getTodoById(id, (err, todo) => {
        if (err) {
            callback(err, null)
        }
        todo.listName = updatedTodo.listName ? updatedTodo.listName : todo.listName
        todo.desc = updatedTodo.desc ? updatedTodo.desc : todo.desc
        todo.todos = updatedTodo.todos ? updatedTodo.todos : todo.todos
    })
}