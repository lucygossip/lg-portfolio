import { Container, Row, Col } from "react-bootstrap";
import Project from "../components/Project";
import Flagship from "../components/flagship/Flagship";
import webstore from "../images/web-store-header.png";
import todo from "../images/todo-items.png";

export default function Projects() {
  const projectList = [
    {
      name: "Web Store",
      image: webstore,
      link: "https://l2t11-capstone-project.onrender.com/",
      repo: "https://github.com/lucygossip/l2t11-capstone-project",
      description:
        "This webstore is created as a capstone project for the HyperionDev and Imperial College London Web Development Bootcamp.",
      stack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    },
    {
      name: "Full Stack Todo App",
      image: todo,
      link: "",
      repo: "https://github.com/lucygossip/todo-task-full-stack",
      description:
        '"Lucy, your submission is impressive! The well-structured project, featuring clear controller, route, and model directories, makes the codebase exceptionally easy to navigate and comprehend. Your full-stack React application stands out, demonstrating excellent implementation of user registration, login, and JSON Web Token (JWT) functionality. The clean and well-commented code significantly enhances its clarity and readability, which is a hallmark of high-quality development."',
      stack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Express"],
    },
  ];

  const renderedList = projectList.map((project) => (
    <Project
      projectName={project.name}
      projectImage={project.image}
      projectStack={project.stack}
      projectDescription={project.description}
      projectLink={project.link}
      projectRepo={project.repo}
    />
  ));

  return (
    <Container>
      <Row>
        <Col md="4" className="order-2 order-md-1">{renderedList}</Col>
        <Col md="8" className="order-1 order-md-2">
          <Flagship />
          </Col>
      </Row>
    </Container>
  );
}