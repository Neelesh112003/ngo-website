import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function VolunteerForm() {
  return (
    <section id="volunteer" className="bg-light py-5 body-box">
      <Container>
        <h2 className="text-center mb-4">Volunteer With Us</h2>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formInterest">
                <Form.Label>Area of Interest</Form.Label>
                <Form.Select>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Fundraising</option>
                  <option>Community Service</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Why do you want to volunteer?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="text-center">
            <Button variant="success" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default VolunteerForm;
