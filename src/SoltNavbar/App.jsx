import React, { Component } from 'react'
import NavBar from './nav-bar/index'
export class App extends Component {
  render() {
    const btn = <button>按钮</button>
    return (
      <div>
     <NavBar rightprops={btn} leftprops={<h2>在左</h2>} centerprops={<input type='text'></input>}></NavBar>
      </div>
    )
  }
}

export default App