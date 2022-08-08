import React from 'react'

export default function ButtonAdd({handleAddButton}) {
  return (
    <div className='col-md-2'>
        <button className='form-control text-center px-0 bg-primary' onClick={()=>handleAddButton()}>+</button>
    </div>
  )
}
