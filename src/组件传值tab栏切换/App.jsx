/*
 * @Author: QLittleMonster 
 * @Date: 2023-09-06 19:58:44
 * @LastEditors: QLittleMonster 
 * @LastEditTime: 2023-09-07 01:13:10
 * @FilePath: /react/react-demo/src/组件传值tab栏切换/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
 import TabControl from './TabControl'
 import './App.css'
export class App extends Component {
    constructor() {
        super()
        this.state = {
            titles:['流行','新款','精选'],
            tabIndex:0,
        }
    }
    tabClick(tabIndex){
        this.setState({tabIndex})
        
    }
  render() {
    const { titles, tabIndex } = this.state
    return (
      <div className='app'>
       <TabControl titles={titles} tabClick={i=>this.tabClick(i)}/>
       <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App