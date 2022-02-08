import React, { Component } from "react";

import ProductItem from './productItem'


export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <ProductItem product={product} addItemToCart={this.props.addItemToCart}/>
          ))}
        </ul>
      </div>
    );
  }
}
