import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const StoreNav = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link style={{ color: "white" }} to="/">
            Online Store
          </Link>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
          <Link style={{ color: "white" }} to="/cart">
            Cart
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default StoreNav;
