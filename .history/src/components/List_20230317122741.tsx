import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
        return <div></div>;
      })}
    </div>
  );
};

export default List;
