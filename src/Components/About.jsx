import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="py-5 body-box">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>
        <Row>
          <p>
            HelpingHands NGO is dedicated to providing support for
            underprivileged communities through education, healthcare, and
            empowerment initiatives.
          </p>
          <p>
            Our mission is to create a sustainable future where everyone has
            equal opportunities and access to basic needs.
          </p>
        </Row>
      </Container>
    </section>
  );
}

export default About;
