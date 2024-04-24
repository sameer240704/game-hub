import React from "react";
import { useTranslation } from "react-i18next";
// import ReactFlow, { Background, BackgroundVariant } from "reactflow";
import GridLines from "react-gridlines";
import MainImage from "../assets/MainImage.png";
import "../styles/LandingPage.css";
import GameCard from "../components/major-components/GameCard";
import Navbar from "../components/major-components/Navbar";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className="landing-page-outer">
      <Navbar />
      <GridLines
        className="landing-page-container"
        cellWidth={110}
        strokeWidth={5}
        cellWidth2={110}
        lineColor={"#d1aa15"}
        lineColor2={"#d1aa15"}
      >
        <div className="main-image-container">
          <img src={MainImage} height={500} className="main-image" />
        </div>
        <GameCard />
      </GridLines>
    </div>
  );
};

export default LandingPage;
