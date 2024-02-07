import { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Definisce un hook personalizzato per il fetching dei dettagli del film
const useFetchMovie = (movieId) => {
  // Stato per il film, il caricamento e l'errore
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Funzione asincrona per recuperare i dettagli del film
    const fetchMovie = async () => {
      setIsLoading(true); // Inizia il caricamento
      const apiKey = '47c45f34';
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Film non trovato');
        const data = await response.json();
        setMovie(data); // Imposta i dati del film
      } catch (error) {
        setError(error.message); // Gestisce l'errore
      } finally {
        setIsLoading(false); // Termina il caricamento
      }
    };

    if (movieId) {
      fetchMovie(); // Esegue il fetch solo se movieId è presente
    }
  }, [movieId]);

  return { movie, isLoading, error }; // Restituisce lo stato del film, del caricamento e dell'errore
};

// Componente MovieDetails che utilizza per il componente a funzione
const MovieDetails = () => {
  const { movieId } = useParams(); // Ottiene l'ID del film dall'URL
  const { movie, isLoading, error } = useFetchMovie(movieId); // Utilizza hook

  // Gestisce il rendering in base allo stato del caricamento e dell'errore
  if (isLoading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error}</div>;

  // Rendering del componente con i dettagli del film
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="text-center">
            <Card.Img variant="top" src={movie.Poster} style={{ objectFit: 'contain' }} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Plot}</Card.Text>
              <Button variant="primary">Guarda Ora</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
