import React from 'react'

export default function TotalSell({subTotal,arrTotalPriceDis}) {
  return (
    <div className="col-md-5 priceSale">-$ 
        {
            subTotal.reduce((pre,value)=>{
                if(value.checkPay){
                  pre+=Number(value.value)
                }
                return pre
            },0) - 
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
