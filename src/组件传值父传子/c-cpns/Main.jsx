import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductlist from './MainProductlist'
import axios from "axios"

export class Main extends Component {
    constructor(){
        super()
        this.state = {
            bannerList:[],
            productList:[]
        }
    }
    componentDidMount(){
        axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
           const bannerLists = res.data.data.banner.list
           const recommend = res.data.data.recommend.list
          this.setState({bannerList: bannerLists, productList: recommend})
        })
    }
	render() {
        const { productList, bannerList } = this.state
		return (
			<div className="main">
				<div>Main</div>
				<MainBanner  bannerList = {bannerList}/>
                <MainProductlist productList = {productList}/>
			</div>
		)
	}
}

export default Main
