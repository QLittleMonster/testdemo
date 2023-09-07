/*
 * @Author: QLittleMonster 
 * @Date: 2023-09-06 19:58:24
 * @LastEditors: QLittleMonster 
 * @LastEditTime: 2023-09-07 01:10:04
 * @FilePath: /react/react-demo/src/组件传值tab栏切换/TabControl.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export class TabControl extends Component {
    constructor(){
        super()
        this.state = {
            currentIndex: 0
          }
    }
    itemClick(index){
        this.setState({currentIndex:index})
        this.props.tabClick(index)
        
    }
  render() {
    const {titles} = this.props
    const {currentIndex} = this.state
    return (
      <div className='tab-contol'>
        {
            titles.map((item,index)=>{
                return <div 
                className={`item ${index === currentIndex?'active':''}`}
                key={item}
                onClick={()=>this.itemClick(index)}
                >
               <span className='text'>{item}</span>
                </div>
            })
        }
      </div>
    )
  }
}

export default TabControl