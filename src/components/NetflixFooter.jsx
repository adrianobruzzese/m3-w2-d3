import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";
import "../App.css"; 

// Componente per le icone social
const SocialIcons = () => (
  <div className="social-icons">
    <Facebook />
    <Instagram />
    <Twitter />
    <Youtube />
  </div>
);

// Componente per una colonna di link
const FooterLinkColumn = ({ links }) => (
  <Col md={3}>
    {links.map((link, index) => (
      <p key={index}>
        <a href={link.href} className="text-secondary">
          {link.text}
        </a>
      </p>
    ))}
  </Col>
);

const NetflixFooter = () => {
  // Array di link per la dimostrazione
  const linkColumns = [
    ["Audio and Subtitles", "Media Center", "Privacy", "Contact us"],
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Center", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
  ];

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5 text-secondary">
        {/* Icone Social */}
        <Row className="mb-2">
          <Col md={3}>
            <SocialIcons />
          </Col>
        </Row>
        {/* Parte dei link */}
        {linkColumns.map((column, index) => (
          <FooterLinkColumn
            key={index}
            links={column.map(text => ({ text, href: "#" }))}
          />
        ))}
        {/* Pulsante Service Code */}
        <Row className="mb-2">
          <Col md={3}>
            <Button variant="outline-secondary">Service Code</Button>
          </Col>
        </Row>
        {/* Copyright */}
        <Row className="mb-2 mt-2">
          <Col md={3}>© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default NetflixFooter;
