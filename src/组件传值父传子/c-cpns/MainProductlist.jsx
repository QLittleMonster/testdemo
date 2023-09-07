import React, { Component } from 'react'

export class MainProductlist extends Component {

  render() {
    const { productList } = this.props
    return (
        <div>
              <div>MainProductlist</div> 
              <ul>
                {productList.map(product =>{
                    return <li key={product.acm}>{product.title}</li>
                    })
                }
              </ul>
        </div>
   
    )
  }
}

export default MainProductlist