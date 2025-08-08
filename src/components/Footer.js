import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  function handleClick(link) {
    window.open(link, "_blank");
  }
  return (
    <>
      <style type="text/css">
        {`
          .row-footer {
            align-items: center;
            background: #eee;
          }

          .border-double {
            border: 5px double gray;
            word-wrap: break-word;
            white-space: normal;
            width: 100%;
          }
        `}
      </style>

      <Container className="mt-auto py-4">
        <Row className="justify-content-center row-footer">
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <Button variant="outline-secondary" className="border-double" onClick={() => handleClick("https://www.linkedin.com/in/lucy-gossip-4a71a296/")}>
              LinkedIn
            </Button>
          </Col>
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <Button variant="outline-secondary" className="border-double" onClick={() => handleClick("https://www.hyperiondev.com/portfolio/LG25010017235/")}>
              HyperionDev
            </Button>
          </Col>
          <Col xs={12} md={2}>
            <Button variant="outline-secondary" className="border-double" onClick={() => handleClick("https://github.com/lucygossip")}>
              Github
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
