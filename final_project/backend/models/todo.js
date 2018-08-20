const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: false },
    listName: { type: String, required: true },
    toDo: [
        {
            item: { type: String, required: true },
            desc: String,
            checked: { type: String, required: true }
        }
    ]
})

module.exports = mongoose.model('ToDo', ToDoSchema)
const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports.getAllTodos = function (callback) {
    ToDo.find({}, callback)
}

module.exports.getTodoById = function (id, callback) {
    ToDo.findById(id, callback)
}

module.exports.getTodoByListName = function (listName, callback) {
    ToDo.find({ listName: listName }, callback)
}

module.exports.addTodo = function (toDo, callback) {
    ToDo.create(toDo, callback)
}

module.exports.updateTodo = function (updateToDo, callback) {
    ToDo.getTodoById(updateToDo._id, (err, ToDo) => {
        ToDo.listName = (updateToDo.listName && updateToDo.listName != ToDo.listName) ? updateToDo.listName : ToDo.listName
        ToDo.toDo = (updateToDo.toDo && updateToDo.toDo != ToDo.toDo) ? updateToDo.toDo : ToDo.toDo
        ToDo.save(callback)
    })
}

module.exports.deleteTodo = function (id, callback) {
    ToDo.deleteOne({ _id: id }, callback)
}