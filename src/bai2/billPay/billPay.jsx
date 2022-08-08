import React from 'react'
import NameChoose from './NameChoose'
import TotalPrice from './TotalPrice'
import TotalPriceDis from './TotalPriceDis'
import TotalSell from './TotalSell'

export default function BillPay({ packageIncludes, arrTotalPriceDis,subTotal }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row justify-content-between">
            <div className="col-md-8">Package Includes</div>
            <div className="col-md-4">Sub Total</div>
          </div>
        </div>
        <div className="col-md-6 justify-content-between px-5 d-flex price-3">
          <TotalPrice subTotal={subTotal}/>
          <TotalSell subTotal={subTotal} arrTotalPriceDis={arrTotalPriceDis}/>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6">
          <div className="row justify-content-between">
            <NameChoose packageIncludes={packageIncludes}/>
            <div className="col-md-4">TOTAL AMOUNT</div>
          </div>
        </div>
        <div className="col-md-6 justify-content-between px-5 d-flex price-3">
          <TotalPriceDis arrTotalPriceDis={arrTotalPriceDis}/>
          <div className="col-md-5"></div>
        </div>
      </div>
    </div>
  )
}
