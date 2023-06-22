import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Naavbar.css";

const Naavbar = () => {
  return (
    <div className="bigdiv">
      <img
        className="imglog"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="logo"
      />
      <Navbar className="nvbr" collapseOnSelect expand="lg" bg="White">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "#00b39b" }} href="#features">
                About us
              </Nav.Link>
              <Nav.Link style={{ color: "#ABABAB" }} href="#pricing">
                Career
              </Nav.Link>
              <NavDropdown title="Departments" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Marketing & PR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Customer Success & Sales
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  IT, Product, Data
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Finance & Administration
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  HR & more
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Naavbar;
