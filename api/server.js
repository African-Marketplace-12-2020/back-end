const express = require("express")
const helmet = require("helmet")
const cors = require('cors')
const morgan = require("morgan")
const session = require("express-session")
require("colors")


const server = express();

server.use(helmet());
server.use(morgan("dev"))
server.use(cors())
server.use(express.json())
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.JWT_SECRET,
}))


server.get("/", (req,res) => {
    res.json({api: "You are up and running"})
})

module.exports = server