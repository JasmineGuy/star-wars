import React from "react";
import { useHistory } from "react-router-dom";
import "./FilmCard.css";

const FilmCard = ({ title, releaseDate, id }) => {
  const convertDate = (releaseDate) => {
    return releaseDate.split("-")[0];
  };

  const history = useHistory();
  const clickHandler = () => {
    history.push(`/film-detail/id=${id}`);
  };
  return (
    <div className="film-card-container" onClick={clickHandler}>
      <h2>{title}</h2>
      <h4>{convertDate(releaseDate)}</h4>
    </div>
  );
};

export default FilmCard;
