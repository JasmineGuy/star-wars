import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const location = useLocation();
  const [person, setPerson] = useState();

  useEffect(() => {
    if (location.pathname) {
      const { pathname } = location;
      const n = pathname.lastIndexOf("=");
      const id = pathname.substring(n + 1);
      if (id) {
        axios.get(`https://swapi.dev/api/people/${id}/`).then((res) => {
          setPerson(res.data);
        });
      }
    }
  }, [location.pathname]);

  return (
    <div className="c-detail">
      {person &&
      person.name &&
      person.birth_year &&
      person.gender &&
      person.hair_color &&
      person.eye_color ? (
        <>
          <h2>{person.name}</h2>
          <h4>Birth Year: {person.birth_year}</h4>
          <h4>Gender: {person.gender}</h4>
          <h4>Hair: {person.hair_color}</h4>
          <h4>Eyes: {person.eye_color}</h4>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default CharacterDetail;
