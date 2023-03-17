import React from "react";
import { useAppSelector } from "../app/hooks";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  return <div></div>;
};

export default List;
