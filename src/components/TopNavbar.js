import { Nav, NavDropdown, Navbar, NavLink, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <>
      <style>
        {`
    .navbar.navbar-blue {
      --bs-navbar-bg: linear-gradient(#2444B4, #1434A4);
      --bs-navbar-color: #fff;
      --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
      --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
      --bs-navbar-active-color: #fff;
      --bs-navbar-brand-color: #fff;
      --bs-navbar-brand-hover-color: #eee;
      --bs-navbar-toggler-border-color: #abc;
      background: var(--bs-navbar-bg);
      color: var(--bs-navbar-color);
    }
      .navbar-toggler {
        background-color: #2444B4;
      }
  `}
      </style>
      <Navbar expand="lg" className="navbar-blue">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink as={Link} to="/">
                Home
              </NavLink>
              <NavLink as={Link} to="/projects">
                Projects
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
