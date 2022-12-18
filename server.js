const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const routers = require("./router/index");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api/v1", routers);

mongoose.connect("mongodb://localhost:27017/todo", () => {
  console.log("database-connected");
});

app.listen(3000, () => {
  console.log("server started");
});
