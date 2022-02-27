
import { ADD_TO_CART, REMOVE_FROM_CART} from "../types";

//getState give what exist in the store


export const addToCart = (product) => (dispatch, getState) => {
  //const cartItems = getState().cart.cartItems.slice()
  const cartItems =getState().cart.cartItems.slice();
  
  let alreadyExists = false;

  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  //update localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//remove 
export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({ type: REMOVE_FROM_CART,
          payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
