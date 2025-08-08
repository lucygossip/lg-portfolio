import { Card, Button, Row, Col } from "react-bootstrap";

export default function Project(props) {
  function handleClick(link) {
    window.open(link, "_blank");
  }
  return (
    <>
      <style type="text/css">
        {`
    .card-title {
      --bs-card-title-color: #1434A4;
    }

    .flagship-card {
      background: linear-gradient(135deg, #1434A4, #1E4DB7);
      color: #fff;
      border: 2px solid rgba(255, 206, 0, 0.6);
      border-radius: 1rem;
      box-shadow: 0 8px 25px rgba(20, 52, 164, 0.4),
                  0 0 15px rgba(255, 206, 0, 0.4);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    /* Nice hover effect for interactivity */
    .flagship-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(20, 52, 164, 0.5),
                  0 0 20px rgba(255, 206, 0, 0.6);
    }

    .flagship-card .card-title {
      color: #fff;
    }

    .flagship-card .card-subtitle li {
      color: #e0e0e0;
    }

    .flagship-card .btn-flagship {
      background-color: #ffce00;
      border: none;
      color: #1434A4;
      font-weight: bold;
      border-radius: 0.5rem;
    }

    .flagship-card .btn-flagship:hover {
      background-color: #ffd633;
      color: #0f286e;
    }

    .flagship-card .btn-flagship-secondary {
            border-color: #ddd;
            color: #ddd;
    }

    .project-image {
        max-height: 200px;
    object-fit: cover;
    }
  `}
      </style>
      <Row className="justify-content-md-center my-4">
        <Col xs="auto">
          <Card className={`shadow ${props.flagship ? "flagship-card" : ""}`}>
            <Card.Img
              className="project-image"
              variant="top"
              src={props.projectImage || "holder.js/100px180"}
            />
            <Card.Body>
              <Card.Title style={{ fontFamily: "Georgia" }}>
                {props.projectName}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <ul className="list-unstyled d-flex flex-wrap">
                  {props.projectStack.map((item) => (
                    <li className="p-1">{item}</li>
                  ))}
                </ul>
              </Card.Subtitle>
              <Card.Text>
                <p style={{ whiteSpace: "pre-line" }}>
                  {props.projectDescription}
                </p>
              </Card.Text>
              {props.projectLink ? (
                <Button
                  className="btn-flagship me-2"
                  variant="success"
                  onClick={() => {
                    handleClick(props.projectLink);
                  }}
                >
                  View Live Project
                </Button>
              ) : null}

              {props.projectRepo ? (
                <Button
                  className="btn-flagship-secondary"
                  variant="outline-secondary"
                  onClick={() => {
                    handleClick(props.projectRepo);
                  }}
                >
                  View Repository
                </Button>
              ) : null}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
