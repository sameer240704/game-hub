import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/CardComponent.css";

const CardComponent = ({ img, game, downloads, link }) => {
  return (
    <div className="card-component-container">
      <div className="card-component-image">
        <div className="card-component-title">
          <div className="game-title">
            <h1>{game}</h1>
            <h4>{downloads}</h4>
          </div>
          <img src={Logo} className="logo-image" />
        </div>
        <img src={img} className="logo-image-2" />
        <button className="card-component-button">
          <Link to={link} className="card-component-button-link">
            Play Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
