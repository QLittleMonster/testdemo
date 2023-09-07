import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
             counter:100
        }
    }
    chageAdd(add){
        this.setState({counter:this.state.counter+add})
    }
  render() {
    const { counter } = this.state
    return (
      <div>
        <div>
            <h2>当前数字：{counter}</h2>
        <AddCounter addClick={(add)=>{this.chageAdd(add)}}/>
        <SubCounter addClick={(add)=>{this.chageAdd(add)}}/>
        </div>
        </div> 
    )
  }
}

export default App