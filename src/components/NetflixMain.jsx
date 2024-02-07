import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";
import NetflixRows from "./NetflixRows";
import "../App.css"; 

const genres = [
  { name: "Harry Potter", query: "harry potter" },
  { name: "Lord Of The Rings", query: "lord of the rings" },
  { name: "Avengers", query: "avengers" },
];

const GenreSection = ({ genre }) => (
  <div className="mt-3">
    <h4 className="text-start" id={genre.query.replace(/\s+/g, '-')}>
      {genre.name}
    </h4>
    <NetflixRows searchQuery={genre.query} />
  </div>
);

const NetflixMain = () => {
  return (
    <Container fluid className="px-4">
      {/* Row per gli strumenti */}
      <Row className="justify-content-between align-items-center">
        <Col md={11}>
          <h2 className="mb-4">Movies</h2>
          <DropdownButton
            title="Genres"
            variant="dark"
            size="sm"
            className="genre-dropdown"
          >
            {genres.map((genre, index) => (
              <Dropdown.Item href={`#${genre.query.replace(/\s+/g, '-')}`} key={index}>
                {genre.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        {/* Colonna per le icone */}
        <Col md={1} className="icon-col">
          <Grid className="icon" />
          <List className="icon" />
        </Col>
      </Row>
      {/* Sezioni dei generi */}
      {genres.map((genre, index) => (
        <GenreSection genre={genre} key={index} />
      ))}
    </Container>
  );
};

export default NetflixMain;
