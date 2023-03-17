import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Rating {
  rate: number;
  count: number;
}

interface Iprops {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const Product = (props: Iprops) => {
  const { id, title, price, description, category, image, rating } = props;
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text className="h3">{product.price}</Card.Text>
          <Button variant="primary" className="w-100">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
