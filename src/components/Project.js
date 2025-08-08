import { Card, Button, Row, Col } from "react-bootstrap";

export default function Project(props) {
  function handleClick(link) {
    window.open(link, "_blank");
  }
  return (
    <>
    <style type="text/css">
        {
            `
            .card-title {
                --bs-card-title-color: #1434A4;
            }
            `
        }
    </style>
    <Row className="justify-content-md-center my-4">
    <Col md="6">
    <Card className="shadow">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{fontFamily: "Georgia"}}>{props.projectName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <ul className="list-unstyled d-flex flex-wrap">
            {props.projectStack.map((item) => (
              <li className="p-1">{item}</li>
            ))}
          </ul>
        </Card.Subtitle>
        <Card.Text>
          <p>{props.projectDescription}</p>
        </Card.Text>
        <Button
          variant="success"
          onClick={() => {
            handleClick(props.projectLink);
          }}
        >
          Project Link
        </Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </>
  );
}
