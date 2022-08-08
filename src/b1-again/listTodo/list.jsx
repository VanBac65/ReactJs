import React, { Fragment } from 'react'
import ActionTodo from './actionTodo'
import RenderTodo from './renderTodo'

export default function List({todoList,btnComplete,btnRemove}) {
  return (
    <Fragment>
        {
            todoList.map((elm,index)=>{
                return (
                        <div className='row d-flex justify-content-center  rounded-pill' key = {index}>
                            <div className='col-md-9 pe-0 ps-0 me-1 mb-1 border rounded-pill'>
                                <RenderTodo btnComplete={btnComplete} elm={elm} index={index}/>
                            </div>
                            <ActionTodo btnRemove={btnRemove} index={index}/>
                        </div>
                )
            })
        }
    </Fragment>
  )
}
