const express = require("express");
const router = express.Router();
const controller = require("../controller/Ctodo");

// GET - /api/todos : show all todos (READ)
router.get("/todos", controller.readTodos);

// POST - /api/todo : create a new todo (CREAT)
router.post("/todo", controller.createTodo);

// PATCH /api/todo/:todoID : edit a specific todo (UPDATE)
router.patch("/todo/:todoId", controller.updateTodo);

// DELETE /api/todo/:todoID : remove a specific todo (DELETE)
router.delete("/todo/:todoId", controller.deleteTodo);

module.exports = router;
