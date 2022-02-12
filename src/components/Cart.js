import React,{Component} from "react";
import formatCurrency from "../util";

export default class  Cart extends Component{

constructor(props){
    super(props);
    this.state = {
        name:"",
        email:"",
        address:"",
        checkout:false,
    }
}

 handleInput =(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  //checkout
  handleCheckout=()=>{
      this.setState({checkout:true})
      console.log(this.state.checkout);
  }
  //createOrder

  createOrder=(e)=>{
      e.preventDefault()
      
      const order= {
          name:this.state.name,
          email:this.state.email,
          address: this.state.address,
          Cart: this.props.cartItems
      }
      this.props.createOrder(order)
  }

  render(){
      const {cartItems} = this.props
      console.log(this.state.checkout);
  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">cart is empty</div>

        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart {"."}
          </div>
        )}
      </div>

      <div className="cart">
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id}>
              <div className="display-item">
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {formatCurrency(item.price)}x{item.count} {""}
                    <button
                      className="button"
                      onClick={() => this.props.removeFormeCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
      {cartItems.length !== 0 &&
      <div>
        <div className="total">
        
          <div>
           
            Total :{" "}
            {formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          </div>
          
         
              <button className="button primary" 
              //onClick={()=>this.setState({Checkout:true})}
              onClick={this.handleCheckout}
            >
                Proceed
            </button>
             
          
        </div>
        {this.state.checkout && (
            
            <div className="cart">
              <form onSubmit={this.createOrder}>
                <ul className="form-container">
                
                    <li>
                        <label>Email</label>
                        <input 
                        name="email"
                        type="email" required onClick={this.handleInput}></input>
                    </li>
                    <li>
                        <label>Name</label>
                        <input 
                        name="name"
                        type="text" required onClick={this.handleInput}></input>
                    </li>
                    <li>
                        <label>Address</label>
                        <input 
                        name="address"
                        type="text" required onClick={this.handleInput}></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary" >
                          Checkout
                        </button>
                    </li>

                </ul>
              </form>
            </div>
        )}
        </div>
      }
      
      </div>
    </>
  )
}
};
