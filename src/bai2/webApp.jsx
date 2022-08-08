import React, { Fragment, useState } from 'react'
import { dataCourse } from '../componant'
import BillPay from './billPay/billPay'
import RenderCourse from './renderCourse/renderCourse'

export default function WebApp() {
    const [subTotal, setSubTotal] = useState([{ value: 319, checkPay: false }, { value: 799, checkPay: false }, { value: 2099, checkPay: false }])
    const [priceSell, setPriceSell] = useState([{ value: 90, checkPay: false }, { value: 300, checkPay: false }, { value: 800, checkPay: false }])
    const [data, setData] = useState([...dataCourse])
    const [packageIncludes, setPackageIncludes] = useState([])
    const [arrTotalPriceDis, setArrTotalPriceDis] = useState([{ value: 229, checkPay: false }, { value: 499, checkPay: false }, { value: 1299, checkPay: false }])
    const addTotol = (value, index) => {
        arrTotalPriceDis[index] = { value: value, checkPay: dataCourse[index].check }
        setArrTotalPriceDis([...arrTotalPriceDis])
    }

    const addSubTotal = (value, index) => {
        subTotal[index] = { value: value, checkPay: dataCourse[index].check }
        setSubTotal([...subTotal])
    }

    const btnCheckBox = (index) => {
        dataCourse[index].check = !(dataCourse[index].check)
        setData([...dataCourse])
        if (dataCourse[index].check) {
            arrTotalPriceDis[index].checkPay = dataCourse[index].check
            setArrTotalPriceDis([...arrTotalPriceDis])
            subTotal[index].checkPay = dataCourse[index].check
            setSubTotal([...subTotal])
            packageIncludes[index] = dataCourse[index].name
            setPackageIncludes(packageIncludes)

        }
        else {
            packageIncludes[index] = null
            arrTotalPriceDis[index].checkPay = dataCourse[index].check
            setArrTotalPriceDis([...arrTotalPriceDis])
            subTotal[index].checkPay = dataCourse[index].check
            setSubTotal([...subTotal])

        }
    }

    return (
        <>
            <div className='container mt-3'>
                {
                    dataCourse.map((elm, index) => {
                        return (
                            <Fragment key={index}>
                                <RenderCourse data={dataCourse}
                                    props={elm} index={index}
                                    btnCheckBox={btnCheckBox}
                                    //   arrValuePrice={arrValuePrice}
                                    addTotol={addTotol}
                                    addSubTotal={addSubTotal}
                                // removeTotal={removeTotal}
                                //   selectValue={selectValue}
                                //   price={price}
                                //   percen={percen}
                                //   priceDiscount={priceDiscount}
                                />
                            </Fragment>
                        )
                    })
                }
            </div>
            <BillPay packageIncludes={packageIncludes} arrTotalPriceDis={arrTotalPriceDis} subTotal={subTotal}/>
        </>
    )
}
