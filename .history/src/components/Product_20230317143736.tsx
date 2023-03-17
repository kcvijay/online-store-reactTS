import React from "react";
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
      <Card style={{ width: "22rem", margin: "1rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text
            style={{
              backgroundColor: "#000",
              padding: "12px",
              display: "inline",
            }}
          >
            {category}
          </Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="h3">{price} €</Card.Text>
          <Card.Text>
            Rating: &#9733;&nbsp;{rating.rate} / 5 ({rating.count} votes)
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
