/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-04 19:18:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-06 16:28:17
 * @FilePath: /react/react-demo/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// rec
import React,{Component} from 'react'
import HelloWorld from './Components/HelloWorld'
class App extends Component {
    constructor(){
        super()
        this.state ={
            message:'lion',
            isShow:true
        }
    }
   chage(){
    //setSate这个函数点击按钮时会被更新被渲染
     this.setState({message:'发生变化了'})
   }
   show(){
    this.setState({isShow:!this.state.isShow})
    
   }
	render() {
        const {message, isShow} = this.state
		return (
			<div>
				<h2>Hello World</h2>
                <h2>{message}</h2>
                <button onClick={()=>this.chage()}>修改</button>
                <button onClick={()=>this.show()}>显示隐藏</button>
                {isShow && <HelloWorld />}
			</div>
		)
	}
    //组件即将被挂载到DOM中之前立即调用
    componentDidMount(){
        console.log('挂载')
    }
    // 处理DOM操作或更新后的状态
    componentDidUpdate(){
        console.log('更新')
        
    }
    // 处理DOM卸载操作
    componentWillUnmount(){
        console.log('卸载')
    }
    
}
export default App
