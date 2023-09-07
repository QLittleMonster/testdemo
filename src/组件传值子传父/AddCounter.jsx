import React, { Component } from 'react'

export class AddCounter extends Component {
  
    addCount(add) {
    this.props.addClick(add)
     
    }

  render() {
    return (
      <div>
        <button onClick = {()=>this.addCount(1)}>+1</button>
        <button onClick = {()=>this.addCount(2)}>+2</button>
         <button onClick= {()=>this.addCount(5)}>+5</button>
      </div>
    )
  }
}

export default AddCounter