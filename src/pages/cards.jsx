import { Fragment, useState } from "react";
export function Card({data}) {
    const [state, setState] = useState()
    return (
        <Fragment>
            {
                data.map((item)=>{
                    return (
                        <>
                            <div class="card" style={{width: '18rem'}}>
                                <img src={item.img} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{item.text}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </Fragment>
    )
}