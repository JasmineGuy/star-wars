import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const history = useHistory();
  const [characterData, setCharacterData] = useState();

  const findCharId = () => {
    const str = character.substring(0, character.length - 1);
    const n = str.lastIndexOf("/");
    const id = str.substring(n + 1);
    return id;
  };

  useEffect(() => {
    axios.get(character).then((res) => {
      setCharacterData(res.data);
    });
  }, [character]);

  const clickHandler = () => {
    const foundId = findCharId();
    if (foundId) {
      history.push(`/characters/id=${foundId}`);
    }
  };

  return (
    <div className="c-card" onClick={clickHandler}>
      <p>
        {characterData && characterData.name ? characterData.name : "loading"}
      </p>
    </div>
  );
};

export default CharacterCard;
