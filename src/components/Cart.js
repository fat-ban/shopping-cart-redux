import React from "react";
import formatCurrency from "../util";

const Cart = ({ cartItems, removeFormeCart, display }) => {
  console.log(cartItems.length);
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
         
              <button className="button primary" >Proceed</button>
          
          
        </div>
      }
      </div>
    </>
  );
};

export default Cart;
