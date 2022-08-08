import { useState } from "react";

export default function Name(){
    const [state, setState] = useState(0)
    const handleIncreateNumber = ()=>{
        console.log(state)
        setState(++state)
    }
    return (
        <div>
            <button onClick={()=>handleIncreateNumber()}>
                <i>{state}</i>
            </button>
        </div>
    )
}