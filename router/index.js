const express = require("express");
const authRouter = require("./auth");
const todoRouter = require("./todoRouter");
const router = express.Router();

//base route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

//auth route
router.use("/auth", authRouter);
//todo route
router.use("/todo", todoRouter);

module.exports = router;
