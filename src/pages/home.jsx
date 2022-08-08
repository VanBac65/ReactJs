import { Fragment } from "react";
// import {DropDown} from "../componant/dropdown"
import { data } from "../componant";
import { DropDown } from "./component/dropdown";

export function Home(){
    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <DropDown title='ip' listItem={['ip10','ip11','ip12']}/>
            </div>
        </Fragment>
    )
}