import React from 'react'

export default function TotalPrice({subTotal}) {
  return (
    <div className="col-md-5 total-amount1">
        {
            subTotal.reduce((pre,value)=>{
                if(value.checkPay){
                  pre+=Number(value.value)
                }
                return pre
            },0)
        }
    </div>
  )
}
