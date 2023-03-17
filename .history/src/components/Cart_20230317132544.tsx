import React from "react";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <Product {...item} key={item.id} />;
      })}
    </div>
  );
};

export default Cart;
