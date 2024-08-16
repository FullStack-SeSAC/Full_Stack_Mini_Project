import React, { useState } from "react";
import "../styles/AddTodo.scss";

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItems] = useState({
    title: "",
  }); // 사용자 입력을 저장할 객체 (id, title, done에 대한 정보를 저장해야하므로 객체)

  const onBtnClick = () => {
    addItem(todoItem); // add 함수 사용
    setTodoItems({
      title: "", // 상태 초기화
    });
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItems({ title: e.target.value })}
      />
      <button onClick={onBtnClick}>ADD</button>
    </div>
  );
}
