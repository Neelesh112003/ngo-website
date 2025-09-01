import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="home"
      className="bg-light text-center py-5 hero-section body-box"
    >
      <Container>
        <h1 className="display-4 fw-bold">Welcome to HelpingHands NGO</h1>
        <p className="lead">
          Making the world a better place, one step at a time.
        </p>
        <Button variant="primary" size="lg" href="#volunteer">
          Become a Volunteer
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
