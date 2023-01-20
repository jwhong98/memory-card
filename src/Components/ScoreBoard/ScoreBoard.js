import React from "react";
import "./ScoreBoard.scss";

const ScoreBoard = (props) => {
  return (
    <div className="scoreBoard">
      <p className="score">Current Score: {props.score}</p>
      <p className="score">Best Score: {props.bestScore}</p>
    </div>
  );
};

export default ScoreBoard;
