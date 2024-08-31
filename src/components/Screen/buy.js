import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Butter from '../Assets/butter.jpg';

function Buy() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const item = {
    id: 1,
    title: 'Butter',
    subtitle: '1 lb',
    description: 'Delicious and fresh butter.',
    price: '$5.00',
    image: Butter,
  };

  const handleConfirmPurchase = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
      // Optionally, navigate to a different page, e.g., order confirmation page
      // navigate('/order-confirmation');
    } catch (err) {
      setError('Failed to complete the purchase. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/products');
  };

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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col sm={12} md={8} lg={6} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text-primary">{item.price}</Card.Text>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">Purchase confirmed!</Alert>}
                <Button 
                  variant="success" 
                  className="me-2" 
                  onClick={handleConfirmPurchase}
                  disabled={loading}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : 'Confirm Purchase'}
                </Button>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Buy;
