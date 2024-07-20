import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Products() {
  return (
    <div className="header">
      <Container className="d-flex justify-content-between align-items-center py-2">
        <div className="brand-name">
          <h1>Nandini Products</h1>
        </div>
        <div className="auth-buttons">
          <Button variant="outline-primary" className="me-2">Sign Out</Button>
        </div>
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary mt-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Products;
