const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const loadRoutes = require('./routes').loadRoutes

const server = express()
const port = 8080

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true });
const db = mongoose.connection;

server.use(bodyParser.json())
server.use(cors())

loadRoutes(server, '/api/')

server.get('/', function (req, res) {
    res.send('Hello SEINFO 2018')
})

server.get('*', function (req, res) {
    res.redirect('/')
})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    server.listen(port, () => {
        console.log("Serve running in port ", port)
    });
})