import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "my todo1",
      done: false,
    },
    {
      id: 2,
      title: "my todo2",
      done: false,
    },
    {
      id: 3,
      title: "my todo3",
      done: true,
    },
  ]);

  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 불가
  // 상위 컴포넌트인 App은 AddTodo에 접근 가능
  //  => App 컴포넌트에서 add() 함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false; // done 초기화

    console.log("new item ->", newItem);
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (targetItem) => {
    const newTodoItems = todoItems.filter((e) => e.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => {
        console.log("item ->", item);
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;
