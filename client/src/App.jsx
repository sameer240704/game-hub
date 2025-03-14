import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import "./App.css";
import Wordle from "./pages/game-pages/Wordle";
import TicTacToe from "./pages/game-pages/TicTacToe";
import Simulator from "./pages/game-pages/Simulator";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/sims" element={<Simulator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
