import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// In your index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form className="border p-4 rounded bg-light" style={{ width: '100%', maxWidth: '500px' }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Address" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Age" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label >Gender</Form.Label>
            <div>
              <Row className='mb-3'>
              <Form.Group as={Col}>
              <Form.Check
                type="radio"
                label="Male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              </Form.Group>
              <Form.Group as={Col}>
              <Form.Check
                type="radio"
                label="Female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              </Form.Group>
              </Row>
            </div>
          </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} >
        <Button variant="primary" type="submit" className="w-100">
          Go Back
        </Button>
        </Form.Group>
        <Form.Group as={Col} >
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
