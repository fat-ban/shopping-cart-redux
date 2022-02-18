import React,{useState} from "react";
import formatCurrency from "../util";
import {Fade} from "react-reveal"




const Cart = ({ cartItems, removeFormeCart,createOrder}) => {
  const [showCheckOut, setShowCheckOut] = useState(false);
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [address, setAddress] = useState("");

  const [state, setState] = useState({
    name:"",
    email:"",
    address:""
  });


  const handleInput=(e)=>{
   setState({[e.target.name]:e.target.value})
  }

  //onSubmit

  const handleSubmitCreateOrder=(e)=>{
    e.preventDefault()
    const order={
      name : state.name,
      email:state.email,
      address:state.address,
      cartItems:cartItems,

    }
    createOrder(order)
  }


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
        <Fade left cascade>
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
                      onClick={() => removeFormeCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </Fade>
      </div>
      <div className="cart">
      {cartItems.length !== 0 &&
        <div className="total">
        
          <div>
           
            Total :{" "}
            {formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          </div>
         
              <button className="button primary" onClick={()=>setShowCheckOut(true)}>Proceed</button>
          
          
        </div>
      }
      </div>

      {showCheckOut && 
      <Fade right cascade>
      <div className="cart">
                    <form onSubmit={handleSubmitCreateOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>

                  </Fade>

        }
    </>
  );
};

export default Cart;