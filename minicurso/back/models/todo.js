const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    listName: {type: String, require: true},
    desc: String,
    todos: [
        {
            name: {type: String, require: true},
            desc: String,
            checked: Boolean
        }
    ]
})

module.exports = mongoose.model("Todo", todoSchema)
const Todo = mongoose.model("Todo", todoSchema)