import React, { Component } from 'react'

export default class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            hair : 'black'
        };
    }

    componentDidMount(){
        // console.log('componentDidMount')
        this.timeId = setInterval(()=>this.updateTime(),1000)
        // console.log('State')
        // this.setState({
        //     date: new Date(),
        //     hair:'yellow'
        // })
        console.log('khoi tao : ',this.state.date,this.state.hair)
    }

    componentWillUnmount (){
        console.log('time id : ',this.timeId)
        clearInterval(this.timeId)
        console.log('remove out dom')
    }

    updateTime(){
        this.setState({
            date: new Date()
        })
    }

    // componentDidUpdate(){
    //     this.setState({
    //         date: new Date(),
    //         hair:'yellow'
    //     });
    // }

  render() {
    console.log('Render Element')
    return (
      <div className='ms-5'> 
        <div>
            Hello
        </div>
        <span>
            {this.state.date.toLocaleTimeString()}
        </span><br/>
        <span>Mau toc : {this.state.hair}</span>
      </div>
    )
  }
}
