import React from "react";
import Tile from "./Tile";
import { GAME_STATES } from "../../../data/words";
import "../../../styles/Wordle.css";

export default function Row({ index, guesses, guess, word, gameState }) {
  const isCurrentRow =
    gameState === GAME_STATES.PLAYING && index === guesses.length;

  return (
    <div className="Row">
      {[...Array(5)].map((_, i) => (
        <Tile
          key={i}
          index={i}
          value={isCurrentRow ? guess?.[i] : guesses?.[index]?.[i]}
          isCurrentRow={isCurrentRow}
          rowHasGuess={!!guesses?.[index]}
          word={word}
        />
      ))}
    </div>
  );
}
