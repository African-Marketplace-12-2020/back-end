const jwt = require("jsonwebtoken");

function restrict() {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          return res.status(401).json({
            message: "Invalid credentials",
          });
        }

        req.token = decoded;
      });

      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  restrict,
};
