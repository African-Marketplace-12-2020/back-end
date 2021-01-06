const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const Users = require("./users-model");
const { restrict } = require("./users-middleware");

const router = express.Router();

// get the list of users
router.get("/", restrict(), async (req, res, next) => {
  try {
    res.json(await Users.find());
  } catch (error) {
    next(error);
  }
});

//create a new user
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      });
    }
    const newUser = await Users.add({
      username,
      // hash the password with a time complexity of 14
      password: await bcrypt.hash(password, 14),
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
const token = jwt.sign({
  userId: user.id,
}, process.env.JWT_SECRET)

    res.json({
      message: `Welcome ${user.username}!`, 
      token: token
    });




  } catch (error) {
    next(error);
  }
});

router.get("/logout", async (req, res, next) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        next(error);
      } else {
        res.status(204).end();
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
