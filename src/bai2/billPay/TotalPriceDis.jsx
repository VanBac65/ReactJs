import React from 'react'

export default function TotalPriceDis({arrTotalPriceDis}) {
  return (
    <div className="col-md-5 total-amount2">$
        {
            arrTotalPriceDis.reduce((pre,value)=>{
                if(value.checkPay){
                  pre+=Number(value.value)
                }
                return pre
            },0)
        }
    </div>
  )
}
