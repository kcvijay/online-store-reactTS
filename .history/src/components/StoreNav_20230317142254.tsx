import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const StoreNav = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/">Online Store</Link>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </Container>
      </Navbar>
    </>
  );
};

export default StoreNav;
