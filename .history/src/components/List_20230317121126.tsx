import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/ProductSlice";

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
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={product.image}
              alt=""
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
