const Todo = require("../model/todo");

//create todo
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({
      message: "creted successfully",
      data: todo,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: "error",
    });
  }
};

//get all todo
const getAllTodo = async (req, res) => {
  try {
    const alltodos = await Todo.find();

    res.status(201).json({
      message: "all todo list",
      data: alltodos,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: "error",
    });
  }
};

//update todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const checkTodo = await Todo.findOne({
      _id: id,
    });

    if (!checkTodo) {
      res.status(404).json({
        message: "todo does not exist",
      });
    }
    const updateTodo = await Todo.findByIdAndUpdate(
      {
        _id: id,
      },
      req.body
    );
    res.status(201).json({
      message: "creted successfully",
      data: updateTodo,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: "error",
    });
  }
};

module.exports = {
  createTodo,
  getAllTodo,
  updateTodo,
};
