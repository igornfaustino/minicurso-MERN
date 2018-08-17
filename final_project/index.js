const express = require('express')
const port = 8080
const server = express()

server.get('/', function(req, res, next) {
    console.log('Sou um MD')
    next()
}, function (req, res) {
    res.send('Hello SEINFO 2018')
})

server.listen(port, function(){
    console.log("Server rodando na porta", port)
})