import React from 'react'

export default function RenderRight({ elm, opt }) {
    return (
        <>
            {
                <div className='col-md-6'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-5'>
                            <p>${opt.priceDiscount}</p>
                            <p>${opt.percen}</p>
                            <p className='text-decoration-line-through'>${opt.price}</p>
                        </div>
                        <div className='col-md-5'>
                            <p>-${(opt.price-opt.priceDiscount)}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
