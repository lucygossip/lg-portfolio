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

  .flagship-card:hover {
    transform: scale(1.02); /* slight zoom instead of moving */
  box-shadow: 0 10px 30px rgba(20, 52, 164, 0.5),
              0 0 20px rgba(255, 206, 0, 0.6);
  }

  /* Make flagship title stand out */
  .flagship-card .card-title {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.4);
  }

  /* Enhance flagship subtitle list items */
  .flagship-card .card-subtitle li {
    color: #f1f1f1;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 0.25rem;
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
    position: relative;
    z-index: 1;
  }

  .flagship-card .project-image {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  }

  /* Only flagship cards get the overlay */
  .flagship-card .project-image-container {
    position: relative;
  }

  .flagship-card .project-image-container::after {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(20, 52, 164, 0.3),
      rgba(30, 77, 183, 0.5)
    );
    mix-blend-mode: multiply;
    z-index: 2;
  }
`}
      </style>

      <Row key={props.projectId} className="justify-content-md-center my-4">
        <Col xs="auto">
          <Card className={`shadow ${props.flagship ? "flagship-card" : ""}`}>
            <div className="project-image-container">
              <Card.Img
                className="project-image"
                variant="top"
                src={props.projectImage || "holder.js/100px180"}
              />
            </div>
            <Card.Body>
              <Card.Title style={{ fontFamily: "Georgia" }}>
                {props.projectName}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <ul className="list-unstyled d-flex flex-wrap">
                  {props.projectStack.map((item) => (
                    <li className="p-1" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card.Subtitle>

              {props.flagship === true ? (
                <div>{props.projectDescription}</div>
              ) : (
                <Card.Text style={{ whiteSpace: "pre-line" }}>
                  {props.projectDescription}
                </Card.Text>
              )}

              {props.projectLink && (
                <Button
                  className="btn-flagship me-2"
                  variant="success"
                  onClick={() => handleClick(props.projectLink)}
                >
                  View Live Project
                </Button>
              )}
              {props.projectRepo && (
                <Button
                  className="btn-flagship-secondary"
                  variant="outline-secondary"
                  onClick={() => handleClick(props.projectRepo)}
                >
                  View Repository
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
