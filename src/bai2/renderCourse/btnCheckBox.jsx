import React from 'react'

export default function BtnCheckBox({index,btnCheckBox}) {
    return (
        <div className='col-md-2 text-center'>
            <input type={'checkbox'} onClick={()=>btnCheckBox(index)}/>
        </div>
    )
}
