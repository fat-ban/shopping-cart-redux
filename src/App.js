import React, { Component } from 'react';
import data from "./data.json"
//components
import Products from './components/Products'
//feature 1
export default class App extends Component {
  constructor(){
    super()
    this.state= {
      products:data.products,
      size:"",
      sort:"",

    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
           <a href="/"> React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
            <Products products={this.state.products}/>
            </div>
            <div className="sidebar">
               Cart Items
            </div>
          </div>
          
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
}


}
