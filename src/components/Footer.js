import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
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
            <Button variant="outline-secondary" className="border-double">
              LinkedIn
            </Button>
          </Col>
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <Button variant="outline-secondary" className="border-double">
              HyperionDev
            </Button>
          </Col>
          <Col xs={12} md={2}>
            <Button variant="outline-secondary" className="border-double">
              Github
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
