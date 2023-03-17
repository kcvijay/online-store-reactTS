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
          src={image}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text className="h3">{price} €</Card.Text>
          <Card.Text>
            {rating.rate} / {rating.count}
          </Card.Text>

          <Button variant="primary" className="w-100">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
