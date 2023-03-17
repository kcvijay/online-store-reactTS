import React from "react";
import { useAppSelector } from "../app/hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <Product {...item} />;
      })}
    </div>
  );
};

export default Cart;
