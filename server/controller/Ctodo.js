const { Todo } = require("../models");
const { Op } = require("sequelize");

// show all todos(READ)
exports.readTodos = async (_, res) => {
  try {
    let todos = await Todo.findAll();
    res.send(todos);
  } catch (err) {
    res.send(err);
  }
};

exports.createTodo = async (req, res) => {
  console.log("req.body ->", req.body);
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      done: false,
      // todoItem 추가시 false가 기본 값
    });
    console.log("newTodo ->", newTodo);
    res.send(newTodo);
  } catch (error) {
    res.send(error);
  }
};

exports.updateTodo = async (req, res) => {
  console.log("req.body ->", req.body);
  try {
    // 배열 구조 분해
    // update() - 업데이트 된 행/row의 수를 나타내는 값을 반환
    // 그 반환값은 배열 형태로 제공
    // 배열 구조 분해 할당을 통해 배열의 첫번째 요소를 변수에 할당 가능
    // [idUpdated] = [0] or [1]
    let [idUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: { [Op.eq]: req.params.todoId },
          // Op.eq는 sequelize의 연산자, "equals/같음"을 의미
          // 경로 파라미터에서 'todoID'
        },
      }
    );
    console.log("idUpdated ->", idUpdated);
    // 수정 실패
    if (idUpdated === 0) return send(false);
    // 업데이트 된 항목이 없으면 'flase'반환
    res.send(true);
    // 업데이트 성공적으로 이루어지면 'true'반환
  } catch (error) {
    res.send(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    let isDeleted = await Todo.destroy({
      where: {
        id: { [Op.eq]: req.params.todoId },
      },
    });

    if (!isDeleted) return res.send(false);
    res.send(true);
  } catch (error) {
    res.send(error);
  }
};
