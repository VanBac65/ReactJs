import { Component } from "react";

export default class DropDownTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            count :0,
            name :'bac'
        };
    }
    handleIncreateNumber(){
        console.log("Cong number",this.state.count,this.state.name)
        this.setState({
            count : this.state.count+1,
        })

        this.setState({
            name : this.state.name +Number(Number(this.state.count)+1)
        })
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.handleIncreateNumber()}>+</button>
                <i>{this.state.count}</i>
            </div>        
        )
    }
}