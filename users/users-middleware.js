const bcrypt = require("bcryptjs")
const Users = require("./users-model")


function restrict () {

    return async (req, res, next) => {
        try {
            // const {username, password } = req.headers

            // if(!username || !password) {
            //     return res.status(401).json({
            //         message: "Invalid credentials"
            //     })
            // }

            // const user = await Users.findBy({ username }).first()
            // if(!user) {
            //     return res.status(401).json({
            //         message: "Invalid credentials"
            //     })
            // }

            // const passwordValid = await bcrypt.compare(password, user.password)
            // if(!passwordValid) {
            //     return res.status(401).json({
            //         message: "Invalid credentials"
            //     })
            // }

            if (!req.session || !req.session.user) {
                return res.status(401).json({
                    message: "Invalid credentials"
                })
            }

            next()

        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    restrict
}