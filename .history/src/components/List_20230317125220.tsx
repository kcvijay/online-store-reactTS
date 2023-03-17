import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/ProductSlice";

import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>All Products</h2>
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
              title={product.title}
              description={
                product.description.length > 150
                  ? product.description.slice(0, 150)
                  : product.description + "..."
              }
              category={product.category}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
