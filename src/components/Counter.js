import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        console.log("Counter.js constructor")
        super(props)
        this.state = {
            count: 0
        }
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    dec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidUpdate() {
        console.log("Counter.js componentDidUpdate")
    }

    // componentDidMount(){
    //         console.log("Counter.js componentDidMount");
    //   }

    // componentWillUnmount(){
    //     console.log("Counter.js WillUnmount")
    // }

    render() {
        console.log("Counter.js render")
        return (
            <div>
                <h2>Counter</h2>

                <button onClick={this.inc}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}
