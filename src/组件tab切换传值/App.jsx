import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
	constructor() {
		super()

		this.state = {
			titles: ['流行', '新款', '精选'],
			tabIndex: 0,
		}
	}

	tabClick(tabIndex) {
		this.setState({ tabIndex })
	}
	getTabItem(item) {
		if (item === '流行') {
			return <span className='text'>{item}</span>
		} else if (item === '新款') {
			return <span className='text'>{item}</span>
		} else {
			return <span className='text'>{item}</span>
		}
	}
	render() {
		const { titles, tabIndex } = this.state

		return (
			<div className="app">
				<TabControl
					titles={titles}
					tabClick={(i) => this.tabClick(i)}
					itemTitle={(item) => this.getTabItem(item)}
				/>
				<h1>{titles[tabIndex]}</h1>
			</div>
		)
	}
}

export default App
