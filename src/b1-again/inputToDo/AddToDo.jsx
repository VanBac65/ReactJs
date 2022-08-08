import React, { useState } from 'react'
import Input from './input'
import ButtonAdd from './buttonAdd'

export default function AddToDo({addTodo}) {
  const [todo, setTodo] = useState('')
  const onChangeInput = (event)=>{
    const value = event.target.value
    setTodo(value)
  }
  const handleAddButton = ()=>{
    if(todo == ''){
      alert('Pls input todo')
    }
    else{
      addTodo({
        name : todo,
        complete : false
      })
    }
    setTodo('')
  }

  const onKeyDown = (event)=>{
    if(event.key=='Enter'){
      if(todo == ''){
        alert('Pls input todo')
      }
      else{
        addTodo({
          name : todo,
          complete : false
        })
      }
      setTodo('')
    }
    
  }

  return (
          <div className='row d-flex mt-5 mb-3 justify-content-center'>
              <Input 
              onChange={onChangeInput}
              onKeyDown={onKeyDown}/>
              <ButtonAdd handleAddButton={handleAddButton}/>
          </div>
  )
}
