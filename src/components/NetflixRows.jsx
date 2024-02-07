import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SingleMovie from "./SingleMovie";

// Componente per visualizzare una riga di film basata su una query di ricerca
const NetflixRows = ({ searchQuery, stile }) => {
  const [data, setData] = useState([]); // Stato per i dati dei film
  const [isLoaded, setIsLoaded] = useState(false); // Stato per il controllo del caricamento

  // Impostazioni per lo slider dei film
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Effettua la chiamata API all'avvio del componente o al cambio di searchQuery
  useEffect(() => {
    const fetchData = async () => {
      const token = "47c45f34"; 
      const endpoint = `http://www.omdbapi.com/?apikey=${token}&s=${searchQuery}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData); // Aggiorna lo stato con i dati ricevuti
          setIsLoaded(true); // Indica che il caricamento è terminato
        } else {
          console.log("Errore durante il recupero dei dati");
        }
      } catch (error) {
        console.error("Errore di fetch:", error);
      }
    };

    fetchData(); // Invoca la funzione di fetch
  }, [searchQuery]); // Dipendenze dell'effetto

  // Renderizza lo slider con i film ottenuti dalla chiamata API
  return (
    <Slider {...settings} className={stile}>
      {isLoaded && data.Search && data.Search.map((movie) => (
        <div key={movie.imdbID}>
          <Link to={`/movie-details/${movie.imdbID}`}>
            <SingleMovie img={movie.Poster} />
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default NetflixRows;
