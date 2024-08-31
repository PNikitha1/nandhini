import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Butter from '../Assets/butter.jpg';

function Products() {
  const navigate = useNavigate();
  const handleSignOut=()=>{
    navigate('/');
  }
  const handleBuyClick = () => {
    navigate('/buy');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };
  return (
    <div className="header">
      <Container className="d-flex justify-content-between align-items-center py-2">
        <div className="brand-name">
          <h1>Nandini Products</h1>
        </div>
        <div className="auth-buttons">
          <Button variant="outline-primary" className="me-2" onClick={handleSignOut}>Sign Out</Button>
        </div>
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary mt-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-4">
          {[...Array(10)].map((_, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Butter} />
                <Card.Body>
                  <Card.Title>Butter</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Unsalted Butter</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className="me-2" onClick={handleBuyClick}>Buy</Button>
                  <Button variant="secondary" onClick={handleCartClick}>Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
