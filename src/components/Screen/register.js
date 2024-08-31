import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', formData);
      navigate('/verify-email', { state: { email: formData.email } });
    } catch (err) {
      console.error('Error registering user', err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form className="border p-4 rounded bg-light" style={{ width: '100%', maxWidth: '500px' }} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Address" name="address" value={formData.address} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Phone number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Check type="radio" label="Male" name="gender" value="Male" onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Check type="radio" label="Female" name="gender" value="Female" onChange={handleChange} />
                </Form.Group>
              </Row>
            </div>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Button variant="primary" className="w-100" onClick={() => navigate('/')}>
              Go Back
            </Button>
          </Form.Group>
          <Form.Group as={Col}>
            <Button variant="primary" className="w-100" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
