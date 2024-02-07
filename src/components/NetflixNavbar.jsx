import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importa NavLink per il routing
import netLogo from "../logo.png"; // Ricordati di inserire il logo
import NavActions from "./NavActions";
import "./app.css"; 

function NetflixNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="align-content-center">
      <Container fluid>
        {/* Brand con NavLink per tornare alla home */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={netLogo} alt="logo Netflix" className="netflix-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Elementi della Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Utilizza NavLink per la navigazione */}
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/tv-shows">Tv Shows</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/recently-added">Recently Added</Nav.Link>
            <Nav.Link as={NavLink} to="/my-list">My List</Nav.Link>
            {/* Dropdown */}
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/genre">Genre</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/most-watched">Most Watched</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/most-recent">Most Recent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/picks">Our Picks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Componente per le azioni della Navbar */}
          <NavActions />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
