const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    listName: { type: String, required: true },
    desc: String,
    toDo: [
        {
            item: { type: String, required: true },
            desc: String,
            checked: { type: Boolean, required: true }
        }
    ]
})

module.exports = mongoose.model('ToDo', ToDoSchema)
const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports.getAllTodos = function (id, callback) {
    ToDo.find({ userId: id }, callback)
}

module.exports.getTodoById = function (id, userId, callback) {
    ToDo.findOne({
        _id: id,
        userId: userId
    }, callback)
}

module.exports.getTodoBylistName = function (listName, callback) {
    ToDo.find({ listName: listName }, callback)
}

module.exports.addTodo = function (toDo, callback) {
    ToDo.create(toDo, callback)
}

module.exports.updateTodo = function (updateToDo, callback) {
    ToDo.getTodoById(updateToDo._id, updateToDo.userId, (err, todo) => {
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
    ToDo.deleteOne({
        _id: id,
        userId: userId
    }, callback)
}