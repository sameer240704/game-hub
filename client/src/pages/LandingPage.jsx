import React from "react";
import { useTranslation } from "react-i18next";
// import ReactFlow, { Background, BackgroundVariant } from "reactflow";
import GridLines from "react-gridlines";
import RockPaperScissors from "./game-pages/RockPaperScissors";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <GridLines
      className="landing-page-container"
      cellWidth={110}
      strokeWidth={5}
      cellWidth2={110}
      lineColor={"#d1aa15"}
      lineColor2={"#d1aa15"}
    >
      <div></div>
      <h1>Gridlines demo</h1>
    </GridLines>
  );
};

export default LandingPage;

{
  /* <ReactFlow>
        <Background
          color="#d1aa15"
          variant={BackgroundVariant.Lines}
          gap={100}
          size={1000}
          strokeWidth={10}
          stroke="#d1aa15"
        />
        <RockPaperScissors />
      </ReactFlow> */
}
