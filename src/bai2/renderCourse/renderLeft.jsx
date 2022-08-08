import React, { Fragment } from 'react'
import BtnCheckBox from './btnCheckBox'
import Select from './Select'

export default function RenderLeft({ elm,index, selectValue,btnCheckBox }) {
    return (
        <Fragment>
            <div className='col-md-6 d-flex '>
                <div className='row d-flex align-items-center'>
                    <BtnCheckBox index={index} btnCheckBox={btnCheckBox}/>
                    <div className='col-md-4 text-center'>
                        <img style={{ width: '100%' }} src={`${elm.imgPath}`} />
                    </div>
                    <div className='col-md-6'>
                        <h2>{elm.name}</h2>
                        <p>{elm.name}</p>
                        <Select elm={elm} index={index} selectValue={selectValue} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
