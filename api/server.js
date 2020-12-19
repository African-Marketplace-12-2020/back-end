require("dotenv").config();
require("colors");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/api", (req, res) => {
  res.json({ message: "Your API is up and running" });
});

module.exports = server;
