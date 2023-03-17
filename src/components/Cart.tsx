import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);

  console.log(cartItems);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexWrap: "wrap",
      }}
    >
      {cartItems.map((item) => {
        return (
          <Product
            {...item}
            description={
              item.description.length > 80
                ? item.description.slice(0, 80) + "..."
                : item.description
            }
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Cart;
