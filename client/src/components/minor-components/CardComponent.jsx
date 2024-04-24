import React from "react";
import Logo from "../../assets/logo.png";
import "../../styles/CardComponent.css";

const CardComponent = ({ img, game, downloads }) => {
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
        <button className="card-component-button">Play Now</button>
      </div>
    </div>
  );
};

export default CardComponent;
