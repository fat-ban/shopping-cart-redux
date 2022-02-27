import React, { Component } from "react";
//import data from "./data.json";
//components
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
//PROVIDER
import { Provider } from "react-redux";
import store from "./store";

//feature 1
export default class App extends Component {
 /* constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      sort: "",
      display: true,
    };
  }*/

  //sort in redux
  //filter in redux
  
  //addItem
  /*addItemToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        console.log(`item._id :${item._id} et product._id :${product._id}`);
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    //console.log(cartItems.length);
    //update state
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };*/

  //removeItem
 /* removeFormeCart = (item) => {
    const cartItems = this.state.cartItems.slice();

    this.setState({ cartItems: cartItems.filter((x) => x._id !== item._id) });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== item._id))
    );
  };*/

 /* createOrder = (order) => {
    alert("Need to save order for " + order.name)
  };*/

  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/"> React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter/>

              <Products addItemToCart={this.addItemToCart}/>
            </div>
            <div className="sidebar">
              <Cart
                //cartItems={this.state.cartItems}
                //removeFormeCart={this.removeFormeCart}
                //createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
      </Provider>
    );
  }
}