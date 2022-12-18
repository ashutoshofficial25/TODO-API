const express = require("express");
const authRouter = require("./auth");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});
router.use("/auth", authRouter);

module.exports = router;
