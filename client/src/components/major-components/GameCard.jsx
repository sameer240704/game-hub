import React from "react";
import { FaFilter } from "react-icons/fa6";
import "../../styles/GameCard.css";

const GameCard = () => {
  return (
    <>
      <div className="game-card-container">
        <div className="card-container">
          <div className="card-container-header">
            <div className="most-popular">
              <h1>Most Popular</h1>
            </div>
            <div className="filter">
              <FaFilter className="filter-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="demo-card-back" />
    </>
  );
};

export default GameCard;
