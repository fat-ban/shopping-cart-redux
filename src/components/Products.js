import React, { Component } from "react";
import {Fade,Zoom}  from "react-reveal";
//import {Modal} from "react-modal"
import Modal from "react-modal"


import formatCurrency from "../util"
//import ProductItem from './productItem'


export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:null
    }
  }

openModal=(product)=>{
  this.setState({product})
  console.log(this.state.product)
}

closeModal=()=>{
  this.setState({product : null})
}

  render() {
    return (
      <div>
        <Fade bottom cascade>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
            <div className="product">
              <a href={"#" + product._id} onClick={()=>this.openModal(product)}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button className="button primary" onClick={()=>{this.props.addItemToCart(product)}}>
                  Add To Cart
                </button>
              </div>
            </div>
          
            {/*<ProductItem product={product} addItemToCart={this.props.addItemToCart}/>*/}
            </li>
          ))}
        </ul>

        </Fade>
        {this.state.product && (
          
         
          
         <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                X
              </button>
               <div className="product-details">
               <img src={this.state.product.image} alt={this.state.product.title} />
                <div className="product-detail-description" >
                   <p>
                     <strong>{this.state.product.title}</strong>
                    </p>
                    <p>{this.state.product.description}</p>
                    <p>
                      Available sizes:{" "}
                      {this.state.product.availableSizes.map((x)=>(
                        <span>
                          {" "}
                          <button className="button" onClick={()=>
                        {this.closeModal()}
                        } >
                            {x}
                          </button>
                        </span>
                      ))}
                    </p>
                    <div className="product-price">
                      <div>{formatCurrency(this.state.product.price)}</div>
                      <button className="button primary" onClick={()=>
                        {this.props.addItemToCart(this.state.product);
                        this.closeModal()}
                        }
                        >Add To Cart</button>
                      </div>
                </div>
                
               </div>
              
            </Zoom>
           
          </Modal>
            
              
        )}
      </div>
    );
  }
}
