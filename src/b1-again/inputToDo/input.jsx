import React from 'react'

export default function Input({onChange,onKeyDown}) {
  return (
    <div className='col-md-9 pe-0 ps-0 me-1'>
        <input type="text" placeholder='to do input' className='form-control pe-0 ps-3' 
                onChange={(event)=>onChange(event)} 
                onKeyDown={(event)=>onKeyDown(event)}/>
    </div>
  )
}
