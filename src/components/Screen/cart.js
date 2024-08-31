import React from 'react';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Butter from '../Assets/butter.jpg';

function Cart() {
  // Mock data for items in the cart
  const navigate=useNavigate();
  const handleSignOut=()=>{
    navigate('/');
  }
  const cartItems = [
    {
      id: 1,
      title: 'Butter',
      subtitle: '1 lb',
      description: 'Delicious and fresh butter.',
      image: Butter,
    },
    {
      id: 2,
      title: 'Cheese',
      subtitle: '500 gm',
      description: 'Tasty and creamy cheese.',
      image: Butter,
    },
    // Add more items as needed
  ];

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
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-4">
          {cartItems.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button variant="danger" className="me-2">Remove</Button>
                  <Button variant="secondary">Save for Later</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
