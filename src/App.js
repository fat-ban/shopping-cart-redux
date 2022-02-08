import React, { Component } from 'react';
import data from "./data.json"
//components
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart';
//feature 1
export default class App extends Component {
  constructor(){
    super()
    this.state= {
      products:data.products,
      cartItems: [],
      size:"",
      sort:"",
      display : true
      

    }
  }

  //sort
  sortProducts=(event)=>{
  //impl
  const sort = event.target.value
  console.log(event.target.value);
  

this.setState({
  sort: sort,
  //slice create cory of state
  products: this.state.products.slice().sort((a,b)=>(
    sort === "lowest"?
    ((a.price > b.price )? 1: -1):
    sort === "highest"?
    ((a.price < b.price )? 1: -1):
    ((a._id < b._id)? 1:-1)


  ))
})
}

  //filter
  filterProducts=(event)=>{
  //imp
  
  if(event.target.value === ""){
  this.setState({
    size:event.target.value,
    products:data.products
  })
  }else{
    this.setState({
    size:event.target.value,
    products:data.products.filter((product)=> 
                          product.availableSizes.indexOf(event.target.value)>= 0
           
           )
  })}
 console.log(this.state.products);
  }

 //addItem
  addItemToCart=(product)=>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart= false;

    cartItems.forEach((item)=>{
      if(item._id === product._id) {
        console.log(`item._id :${item._id} et product._id :${product._id}`);
        item.count++;
        alreadyInCart = true
      }
    })
   
    if(!alreadyInCart){
      
      cartItems.push({...product,count:1})
    }
    //console.log(cartItems.length);
    //update state
    this.setState({cartItems})
    this.state.cartItems.length !== 0 && this.setState({display :false})
  }

  //removeItem
  removeFormeCart=(item)=>{
    const cartItems = this.state.cartItems.slice();
    
    this.setState({cartItems:cartItems.filter(x=>x._id !== item._id)})
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
            <Filter 
            count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
             filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            >
            </Filter>
         
            <Products products={this.state.products} addItemToCart={this.addItemToCart} />
            </div>
            <div className="sidebar" >
               <Cart cartItems={this.state.cartItems} removeFormeCart={this.removeFormeCart} display={this.state.display}/>
              
            </div>
          </div>
          
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
}


}
