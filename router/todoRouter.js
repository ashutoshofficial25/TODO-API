const express = require("express");
const todoController = require("../controller/todoController");
const tokenValidator = require("../middleware/tokenValidator");

const todoRouter = express.Router();

todoRouter.post("/create-todo", tokenValidator, todoController.createTodo);

todoRouter.get("/getAll", tokenValidator, todoController.getAllTodo);

todoRouter.get("/updateTodo/:id", tokenValidator, todoController.updateTodo);

module.exports = todoRouter;
