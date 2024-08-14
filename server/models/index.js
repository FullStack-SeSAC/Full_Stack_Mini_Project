"use strict";
// JS 엄격모드/strict mode 활성화
// - 잠재적 오류 방지, 안전한 코드 작성 지원

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = require("./Todo")(sequelize, Sequelize);
// models/Todo.js에서 정의한 model이 db.Visitor에 들어감
// db = {"sequelize": sequelize, "Sequelize": "Sequelize"}

module.exports = db;
