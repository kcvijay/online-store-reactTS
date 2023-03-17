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
          <Link style={{ color: "white" }} to="/">
            Online Store
          </Link>
          <Nav className="me-auto">
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
            <Link style={{ color: "white" }} to="/cart">
              Cart
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default StoreNav;
