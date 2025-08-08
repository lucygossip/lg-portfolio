import { Container, Row, Col, Card, Button } from "react-bootstrap";
import lgHeadshot from "../images/lucy-gossip-headshot.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <div
        className="mx-auto my-4"
        style={{
          maxWidth: "1000px",
          paddingTop: "5rem",
          fontFamily: "Georgia, sans-serif",
        }}
      >
        <Card className="shadow" style={{ padding: "5rem" }}>
          <Row className="g-0">
            <Col
              xs={12}
              md={5}
              className="order-1 order-md-2"
              style={{ marginBottom: "1rem" }}
            >
              <Card.Img
                src={lgHeadshot}
                alt="Lucy Gossip"
                className="w-100 h-100 object-fit-cover"
              />
            </Col>
            <Col
              xs={12}
              md={7}
              className="d-flex align-items-center order-2 order-md-1"
            >
              <Card.Body>
                <Card.Title className="display-4" style={{ color: "#1434A4" }}>
                  Lucy Gossip
                </Card.Title>
                <Card.Subtitle style={{ fontSize: "26px", color: "gray" }} className="my-2">Frontend Developer</Card.Subtitle>
                <Card.Text>
                  Hello, I'm Lucy, and I write clean and well-structured code for enjoyable user experiences.
                </Card.Text>
                <Link to="/projects">
                <Button variant="success" style={{ fontFamily: "Arial" }} size="lg">
                  View Projects
                </Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </Container>
  );
}
