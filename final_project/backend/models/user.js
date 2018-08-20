const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema)
const User = mongoose.model('User', UserSchema)

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback)
}

module.exports.getUserByEmail = function (email, callback) {
    User.find({email: email}, callback)
}

module.exports.addUser = function (user, callback) {
    User.create(user, callback)
}

module.exports.updateUser = function (updateUser, callback) {
    User.getUserById(updateUser._id, (err, user) => {
        user.email = (updateUser.email && updateUser.email != user.email) ? updateUser.email: user.email
        user.password = (updateUser.password && updateUser.password != user.password) ? updateUser.password: user.password
        user.save(callback)
    })
}

module.exports.deleteUser = function (id, callback) {
    User.deleteOne({_id: id}, callback)
}