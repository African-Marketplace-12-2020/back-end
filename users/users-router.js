const express = require("express");
const Users = require("./users-model");

const router = express.Router();

// get the list of users
router.get("/", async (req, res, next) => {
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
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = res.body
        const user = await Users.findBy({ useername }).first()

        if(!user) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }
        res.json({
            message: `Welcome ${user.username}!`,
        })
    } catch(error) {
        next(error)
    }
})

module.exports = router;
