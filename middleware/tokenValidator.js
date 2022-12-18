const jwt = require("jsonwebtoken");
const tokenValidator = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorised user",
    });
  }
  jwt.verify(token, "my-secret-code", (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "unsuthorised user",
      });
    }
    req.userId = decoded.id;
  });

  next();
};

module.exports = tokenValidator;
