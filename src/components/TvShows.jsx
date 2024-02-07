import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";
import "../App.css"; 

const TvShows = () => {
  return (
    <Container fluid className="px-4">
      {/* Row per gli strumenti di navigazione o visualizzazione */}
      <Row className="justify-content-between align-items-center mt-3">
        <Col md={11}>
          <h2>More Tv shows are coming...</h2> {/* Titolo della sezione */}
        </Col>
        {/* Colonna per le icone di visualizzazione */}
        <Col md={1} className="icon-container">
          {/* Icone per cambiare la visualizzazione (aggiungi funzionalità onClick per interattività) */}
          <Grid size="1rem" aria-label="Grid view" />
          <List size="1rem" aria-label="List view" />
        </Col>
      </Row>
      <div className="mt-3">
        <h4 className="text-start" id="tba">tba</h4> {/* Placeholder per contenuto futuro */}
      </div>
    </Container>
  );
};

export default TvShows;
