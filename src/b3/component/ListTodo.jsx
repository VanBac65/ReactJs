import React from 'react'

export default function ListTodo({todoList}) {
  return (
    <ul className='list-Gruop'>
        {todoList.map((elm,index)=>
           (
              <li key={index} className={`list-gruop-item ${elm.complete ? "active":""}`}>
                  {elm.name}
              </li>
          )
        )}
    </ul>
  )
}
