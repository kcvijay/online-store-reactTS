import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const StoreNav = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink to="/">Online Store</NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default StoreNav;
