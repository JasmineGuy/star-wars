import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./FilmDetail.css";

const FilmDetail = () => {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    if (location.pathname) {
      const { pathname } = location;
      const filmId = pathname.charAt(pathname.length - 1);

      if (filmId) {
        axios.get(`https://swapi.dev/api/films/${filmId}/`).then((res) => {
          setData(res.data);
        });
      }
    }
  }, [location.pathname]);

  return (
    <div className="film-detail">
      <div className="details">
        <h1>{data && data.title ? data.title : "loading"}</h1>
        <p>{data && data.opening_crawl ? data.opening_crawl : "loading"}</p>
        <div className="character-part">
          <h3>Characters</h3>
          <div>
            {data && data.characters && data.characters.length
              ? data.characters
                  .slice(0, 10)
                  .map((character, index) => (
                    <CharacterCard key={index} character={character} />
                  ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
