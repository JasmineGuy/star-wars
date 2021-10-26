import axios from "axios";
import React, { useEffect, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import "./Film.css";

const Film = () => {
  const [films, setFilms] = useState();

  useEffect(() => {
    axios.get("https://swapi.dev/api/films").then((res) => {
      setFilms(res.data.results);
    });
  }, []);

  return (
    <div className="films-container">
      {films && films.length
        ? films.map((film, index) => (
            <FilmCard
              key={index}
              title={film.title}
              releaseDate={film.release_date}
              id={film.episode_id}
            />
          ))
        : "Loading"}
    </div>
  );
};

export default Film;
