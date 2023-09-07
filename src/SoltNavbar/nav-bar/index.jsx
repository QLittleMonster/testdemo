import React, { Component } from 'react'
import './style.css'
export class index extends Component {
  render() {
    const { leftprops, centerprops, rightprops} = this.props
    return (
      <div className='nav-bar'>
        <div className='left'>{leftprops}</div>
        <div className='center'>{centerprops}</div>
        <div className='right'>{rightprops}</div>
      </div>
    )
  }
}

export default index