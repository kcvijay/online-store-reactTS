import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/ProductSlice";
import { addToCart } from "../features/ProductSlice";

import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  const handleAddToCart = {
    dispatch(addToCart())
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ margin: "25px 0", textAlign: "center" }}>All Products</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return (
            <Product
              {...product}
              key={product.id}
              description={
                product.description.length > 80
                  ? product.description.slice(0, 80) + "..."
                  : product.description
              }
              addToCart={()=>handleAddToCart()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
