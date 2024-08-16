import { useEffect, useState } from "react";
// import axios from 'axios';
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "./styles/App.scss";
import axios from "axios";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // [백엔드, 프론트 API 연결]
  // - Read API
  useEffect(() => {
    console.log("첫 렌더링 완료");

    const getTodos = async () => {
      let res = await axios.get("http://localhost:8080/api/todos");
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 불가
  // 상위 컴포넌트인 App은 AddTodo에 접근 가능
  //  => App 컴포넌트에서 add() 함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용
  // Create API
  const addItem = async (newItem) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false; // done 초기화
    // console.log("new item ->", newItem);
    // setTodoItems([...todoItems, newItem]);

    const res = await axios.post("http://localhost:8080/api/todo", newItem);
    console.log("additem ->>>>>", res.data);
    setTodoItems([...todoItems, res.data]);
  };

  // Delete API
  const deleteItem = async (targetItem) => {
    // const newTodoItems = todoItems.filter((e) => e.id !== targetItem.id);
    // setTodoItems(newTodoItems);

    await axios.delete(`http://localhost:8080/api/todo/${targetItem.id}`);
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
