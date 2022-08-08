import React, { Fragment, useState } from 'react'
import RenderLeft from './renderLeft'
import RenderRight from './RenderRight'

export default function RenderCourse({ props, index,btnCheckBox,packageIncludes,arrValuePrice,addTotol,addSubTotal}) {
    const [price, setPrice] = useState(props.opt[0].price)
    const [percen, setPercen] = useState(props.opt[0].percentDiscount)
    const [priceDiscount, setPriceDiscount] = useState(props.opt[0].priceDiscount)
    

    const selectValue = (e,index) => {
        setPrice((e.target.value).split(' ')[0])
        setPriceDiscount((e.target.value).split(' ')[1])
        setPercen((e.target.value).split(' ')[2])
        addTotol((e.target.value).split(' ')[1],index)
        addSubTotal((e.target.value).split(' ')[0],index)
        // setPackageIncludes(packageIncludes.push)
    }

    return (
        <Fragment>
            <div className='container-fluid border border-danger mb-3 p-5 align-items-center' key={index}>
                <div className='row d-flex align-items-center'>
                    <RenderLeft elm={props} index={index} selectValue={selectValue} btnCheckBox={btnCheckBox} />
                    <RenderRight elm={props} opt={{ price, percen, priceDiscount }} arrValuePrice={arrValuePrice} />
                </div>
            </div>
        </Fragment>
    )
}
