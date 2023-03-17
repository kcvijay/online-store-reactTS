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

  console.log("products", products);
  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default List;
