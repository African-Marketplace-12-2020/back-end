require("dotenv").config();
require("colors");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session")

const server = express();

const itemsRouter = require("../items/items-router.js")
const userRouter = require("../users/users-router.js")

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session({
  resave:false, 
  saveUninitialized: false, 
  secret: process.env.JWT_SECRET, 
}))


server.use("/items", itemsRouter)
server.use("/", userRouter)

server.get("/api", (req, res) => {
  res.json({ message: "Your API is up and running" });
});

module.exports = server;
