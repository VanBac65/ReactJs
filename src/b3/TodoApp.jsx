import React, { useState } from "react";
import AddTodo from "./component/AddTodo";
import ListTodo from "./component/ListTodo";

export default function TodoApp() {
  const [todoList, setStateTodoList] = useState([]);
  //hàm để xử lý việc push todo vào list to
  const addTodo = (todo) => {
    console.log('todo', todo)
    setStateTodoList([...todoList, todo]);
  };

  console.log("todoList", todoList);
  return (
    <div className='d-flex flex-column align-items-center m-auto mt-5 rounded border border-info w-50'>
      <h2>To-do list</h2>
      <AddTodo addTodo={addTodo} />
      <ListTodo todoList={todoList}/>
    </div>
  );
}

/*
- khởi tạo 1 mảng chứa các việc todo
- item of todo:
todoList: [
    {
        name: 'tên của todo',
        completed: boole,
        
    }
]


*/
