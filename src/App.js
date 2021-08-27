import React, { Component } from 'react'
import "./App.css"
import Counter from './components/Counter'

export default class App extends Component {
  constructor(props) {
    console.log("App.js constructor")
    super(props)
    this.state = {
      mount: true
    }
  }

  switch = () => {
    this.setState({ mount: !this.state.mount })
  }

  // increment=()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }

  componentDidMount() {
    console.log("App.js componentDidMount");
    // this.increment()

  }


  render() {
    console.log("App.js render")
    return (
      <div className="App">
        <h1>React LifeCycle methods</h1>
        {/* <button onClick={this.switch}>switch</button>
        {this.state.mount ? <Counter /> : null} */}
        <Counter />
      </div>
    )
  }
}
