import React from "react";
import { FaFilter } from "react-icons/fa6";
import "../../styles/GameCard.css";
import CardComponent from "../minor-components/CardComponent";
import Wordle from "../../assets/Games/wordle.png";
import TicTacToe from "../../assets/Games/tictactoe.jpg";
import Sims from "../../assets/Games/sims.png";

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
          <div className="card-container-main">
            <div className="games-1">
              <CardComponent
                img={Wordle}
                game={"Wordle"}
                downloads={"2.5 million"}
              />
              <CardComponent
                img={TicTacToe}
                game={"Tic-Tac-Toe"}
                downloads={"5.6 million"}
              />
              <CardComponent
                img={Sims}
                game={"Simulator"}
                downloads={"3.5 million"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
