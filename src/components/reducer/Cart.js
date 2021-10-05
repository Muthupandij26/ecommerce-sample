import React, { createContext, useReducer, useEffect } from "react";
import Home from "../home/Home";
// import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import Product from "../product/Product";

export const CartContext = createContext();

const initialState = {
  item: Home.products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  return (
    <CartContext.Provider
      value={{ ...state,  increment }}>
      <Product />
    </CartContext.Provider>
  );
};

export default Cart;