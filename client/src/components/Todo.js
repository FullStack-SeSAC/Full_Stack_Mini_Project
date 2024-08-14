import React from "react";

export default function Todo({ item }) {
  console.log("Todo-item ->", item);
  return (
    <div>
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done} // ture: o, false: x
      />
      <label htmlFor="todo0">{item.title}</label>
    </div>
  );
}
