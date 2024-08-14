// TODO: 테이블 구조 정의

// const { DataTypes } = require("sequelize");

// sequelize 모델이랑 mysql table 연결
const Todo = function (Sequelize, DataTypes) {
  // Sequelize - model/index.js에서의 sequelize
  // DataTypes - model/index.js에서의 Sequelize

  const model = Sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        // title VARCHAR(100) NOT NULL
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        // done BOOLEAN NOT NULL false
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "todo", // 실제 DB 테이블 이름
      freezeTableName: true, // Sequelize가 테이블 이름을 자동으로 복수형으로 만들지 않도록 설정
      timestamps: false, // 테이블에 createAt과 updatedAt 타임스탬프 컬럼을 자동으로 추가하지 않도록 설정
    }
  );
  return model;
};

module.exports = Todo;

// 시퀄라이즈는 기본적으로 다음과 같이 사용
// - 모델이름: 단수형
// - 테이블 이름: 복수형
