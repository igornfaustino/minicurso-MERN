const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const port = 8080

const server = express()

mongoose.connect("mongodb://localhost:27017/todo")

// ------ MW -------

// Permite comunicação entre origens diferentes
server.use(cors())
// Parser da requisição
server.use(bodyParser.json())

// ------ Rotas ------
const user = require("./routes/user")

server.use("/api", user)

server.get("/", (req, res) => {
    res.send("Ola SEINFO 2018")
})

// -----------------

// Inicia o servidor
server.listen(port, () => {
    console.log("servidor rodando na porta " + port)
})