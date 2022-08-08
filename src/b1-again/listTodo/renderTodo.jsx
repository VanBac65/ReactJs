import React, { useState } from 'react'

export default function RenderTodo({ elm, index, btnComplete }) {

  return (

    <button key={index} onClick={() => btnComplete(index)} className='form-control rounded-pill border-0 p-0'>
      <div className={`pe-0 ps-3 text-start me-1 w-100 rounded-pill pt-2 pb-2 ${elm.complete? 'bg-success' : ''}`}>
        {elm.name}
      </div>
    </button>
  )
}
