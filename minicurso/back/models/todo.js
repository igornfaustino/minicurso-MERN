const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    listName: { type: String, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    desc: String,
    todos: [
        {
            name: { type: String, require: true },
            desc: String,
            checked: Boolean
        }
    ]
})

module.exports = mongoose.model('Todo', todoSchema)
const Todo = mongoose.model('Todo', todoSchema)

// Em cada pesquisa, deve ser comparado se a lista pertence ao usuario, por questoes de segurança
module.exports.getAllTodos = function (id, callback) {
    Todo.find({ userId: id }, callback)
}

module.exports.getTodoById = function (id, userId, callback) {
    Todo.findOne({
        _id: id,
        userId: userId
    }, callback)
}

module.exports.getTodoBylistName = function (listName, callback) {
    Todo.find({ listName: listName }, callback)
}

module.exports.addTodo = function (toDo, callback) {
    Todo.create(toDo, callback)
}

module.exports.updateTodo = function (updateToDo, callback) {
    Todo.getTodoById(updateToDo._id, updateToDo.userId, (err, todo) => {
        if (todo) {
            todo.listName = (updateToDo.listName && updateToDo.listName != todo.listName) ? updateToDo.listName : todo.listName
            todo.desc = (updateToDo.desc && updateToDo.desc != todo.desc) ? updateToDo.desc : todo.desc
            todo.toDo = (updateToDo.toDo && updateToDo.toDo != todo.toDo) ? updateToDo.toDo : todo.toDo
            todo.save(callback)
        } else {
            callback(true, null)
        }
    })
}

module.exports.deleteTodo = function (id, userId, callback) {
    Todo.deleteOne({
        _id: id,
        userId: userId
    }, callback)
}