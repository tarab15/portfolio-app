import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.Email.send({
      SecureToken: "33390d44-5fd3-47c9-9de0-f2c1075411d9", // Get the token from smtpjs.com
      To: "tarabzehra1234@gmail.com", // Your Gmail address
      From: formData.email,
      Subject: `New Message from ${formData.name}`,
      Body: `Name: ${formData.name} <br> Email: ${formData.email} <br> Message: ${formData.message}`,
    })
      .then((message) => {
        setAlertMessage("Your message has been sent successfully!");
        setShowAlert(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setAlertMessage("An error occurred, please try again.");
        setShowAlert(true);
      });
  };

  return (
    <div className="text-light" style={{ margin: 20 }}>
      <Navbar />
      <Container style={{ marginTop: "50px" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Contact Me</h2>
            {showAlert && <Alert variant="info">{alertMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
