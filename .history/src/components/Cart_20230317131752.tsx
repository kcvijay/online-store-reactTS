import React from "react";
import { useAppSelector } from "../app/hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);

  return <div>Cart</div>;
};

export default Cart;
