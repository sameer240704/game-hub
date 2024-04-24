import React from "react";
import Row from "./Row";
import "../../../styles/Wordle.css";

export default function GameBoard({ guess, guesses, word, gameState }) {
  return (
    <div className="GameBoard">
      {[...Array(6)].map((_, i) => (
        <Row
          index={i}
          key={i}
          guesses={guesses}
          guess={guess}
          word={word}
          gameState={gameState}
        />
      ))}
    </div>
  );
}
