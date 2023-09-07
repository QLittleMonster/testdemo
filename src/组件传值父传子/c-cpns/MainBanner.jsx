import React, { Component } from 'react'

export class MainBanner extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    // console.log(this.props)
    const { bannerList } = this.props
    return (
     <div>
        <div>
            MainBanner
        </div>
        <ul>
            {
                bannerList.map(item =>{
                    return <li key={item.acm}>{item.title}</li>
                })
            }
        </ul>
     </div>
    )
  }
}

export default MainBanner