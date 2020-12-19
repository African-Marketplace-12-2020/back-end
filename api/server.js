require("dotenv").config();
require("colors")

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session")
// const cookieParser = require("cookie-parser")
const usersRouter = require("../routes/users-router")


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(cookieParser())
server.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.JWT_SECRET,
}))

server.use("/api" , usersRouter)

server.get("/api", (req, res) => {
  res.json({ message: "Ypur API is up and running" });
});

module.exports = server;
