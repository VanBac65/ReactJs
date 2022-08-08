import React, { useState } from 'react'

export default function Select({ elm, index, selectValue }) {
    return (
        <div>
            <select onChange={(e) => selectValue(e,index)} className='form-control w-75'>
                {elm.opt.map((elm, index) => {
                    return (
                            <option key={index} value={`${elm.price} ${elm.priceDiscount} ${elm.percentDiscount}`}>{elm.name} </option>
                    )
                })}
            </select>
        </div>
    )
}
