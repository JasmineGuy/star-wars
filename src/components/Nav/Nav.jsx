import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="left">
        <NavLink className="nav" to="/">
          Home
        </NavLink>
      </div>
      <div className="right">
        <NavLink className="nav" to="/films" activeClassName="nav-active">
          Films
        </NavLink>
        <NavLink className="nav" to="/characters" activeClassName="nav-active">
          Characters
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
