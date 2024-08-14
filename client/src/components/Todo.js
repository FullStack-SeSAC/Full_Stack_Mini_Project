import React, { useState } from "react";

export default function Todo({ item, deleteItem }) {
  console.log("Todo-item ->", item);

  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };

  // title 클릭시 실행될 함수: readOnly를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // readOnly true: enter키 누르면 readOnly를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") setReadOnly(true);
  };

  // 커서가 깜빡인다고 수정 가능 X
  // 사용자가 키보드 입력 시, item 새 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // checkbox 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };
  return (
    <div>
      <input
        type="checkbox"
        id={`todo${todoItem.id}`}
        name={`todo${todoItem.id}`}
        value={`todo${todoItem.id}`}
        defaultChecked={todoItem.done} // ture: o, false: x
        onChange={checkboxEventHandler}
      />
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={enterKeyEventHandler}
      />
      {/* <label htmlFor="todo0">{item.title}</label> */}
      <button onClick={onDeleteBtnClick}>Delete</button>
    </div>
  );
}
