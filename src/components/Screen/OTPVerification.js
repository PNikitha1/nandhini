import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function OTPVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/verify-email', {
        email: location.state.email,
        verificationCode: otp,
      });
      navigate('/products'); // Redirect to products page upon successful verification
    } catch (err) {
      console.error('Error verifying OTP', err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form className="border p-4 rounded bg-light" style={{ width: '100%', maxWidth: '400px' }} onSubmit={handleSubmit}>
        <Form.Group controlId="formOtp">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Verify
        </Button>
      </Form>
    </Container>
  );
}

export default OTPVerification;
