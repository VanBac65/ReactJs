import { Fragment, useState } from "react";

export function DropDown({ title, listItem }) {
    let is = false
    const [isShow, setStateIsShow] = useState(is)
    const [textOfBtn, setStateText] = useState(title)
    const clickBtn = () => {
        setStateIsShow(!isShow)
    }
    const clickItem = (item) => {
        setStateText(item)
    }
    console.log(title, listItem)
    return (
        <Fragment>
            <div className="dropdown">
                <button onClick={() => clickBtn()} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {textOfBtn}
                </button>
                <ul className={`dropdown-menu ${isShow ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
                    {
                        listItem.map((item, index) => {
                            console.log(item)
                            return <li onClick={() => clickItem(item)} key={index}>
                                        <a className="dropdown-item" href="#">
                                            {item}
                                        </a>
                                    </li>
                        })}
                </ul>
            </div>
        </Fragment>
    )
}