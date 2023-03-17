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
        return (
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "250px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="font-lg">{product.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
