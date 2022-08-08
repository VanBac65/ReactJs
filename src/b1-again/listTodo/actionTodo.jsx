import React from 'react'

export default function ActionTodo({btnRemove,index}) {
  return (
    <div className='col-md-2 '>
        <button onClick={()=>btnRemove(index)} className='form-control me-1 text-center px-0 bg-danger'>-</button>
    </div>
  )
}
