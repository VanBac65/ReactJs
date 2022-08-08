import React, { useState } from 'react'
import AddToDo from './inputToDo/AddToDo'
import List from './listTodo/list'

export default function ToDoApp() {
  const [todoList, setTodoList] = useState([])
  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }

  const btnComplete = (index) => {
    if(todoList[index].complete==false){
      todoList.splice(index, 1, {
        name : todoList[index].name + ' (Completed!)',
        complete: !todoList[index].complete
      })}
    else{
      todoList.splice(index, 1, {
        name : (todoList[index].name).split(' ')[0],
        complete: !todoList[index].complete
    })
  }
    setTodoList([...todoList])
    
  }

  const btnRemove = (index) =>{
    todoList.splice(index,1)
    setTodoList([...todoList])
  }

  return (
    <div className='container col-md-4 border border-primary mt-5'>
      {console.log(todoList)}
      <AddToDo addTodo={addTodo} />
      <List todoList={todoList} btnComplete={btnComplete} btnRemove={btnRemove}/>
    </div>
  )
}
