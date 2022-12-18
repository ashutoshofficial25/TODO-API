const User = require("../model/user");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);

    let secret = "my-secret-code";

    if (!user) {
      return res.status(400).json({
        error: "user not created",
        message: "error",
      });
    }

    let token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400,
    });

    res.status(201).json({
      status: true,
      message: "logged in successfully",
      authToken: token,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: "error",
    });
  }
};

module.exports = {
  signup,
};
