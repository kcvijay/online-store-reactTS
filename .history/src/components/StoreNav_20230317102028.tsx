import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const StoreNav = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="h-8">
        <Container>
          <Navbar.Brand href="/">Online Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default StoreNav;
