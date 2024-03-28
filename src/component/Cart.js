import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartItem);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-10 p-10 font-bold text-center">
      <h1 className="text-xl">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-2 bg-blue-900 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 && <h1>Cart is Empty.Add items to the cart</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
