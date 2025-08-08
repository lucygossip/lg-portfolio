import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";

export default function Projects() {
  const projectList = [
    {
      name: "Web Store",
      link: "https://github.com/lucygossip/l2t11-capstone-project",
      description:
        "This webstore is created as a capstone project for the HyperionDev and Imperial College London Web Development Bootcamp.",
      stack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    },
    {
      name: "Full Stack Todo App",
      link: "https://github.com/lucygossip/todo-task-full-stack",
      description:
        '"Lucy, your submission is impressive! The well-structured project, featuring clear controller, route, and model directories, makes the codebase exceptionally easy to navigate and comprehend. Your full-stack React application stands out, demonstrating excellent implementation of user registration, login, and JSON Web Token (JWT) functionality. The clean and well-commented code significantly enhances its clarity and readability, which is a hallmark of high-quality development."',
      stack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Express"],
    },
  ];

  const renderedList = projectList.map((project) => (
    <Project
      projectName={project.name}
      projectStack={project.stack}
      projectDescription={project.description}
      projectLink={project.link}
    />
  ));

  return (
    <Container>
      {renderedList}
    </Container>
  );
}
