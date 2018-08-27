const express = require("express")
const router = express.Router()

router.get("/user", (req, res) => {
    res.send("Ola usuario!!")
})

module.exports = router