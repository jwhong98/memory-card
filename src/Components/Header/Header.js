import React from "react";
import "./Header.scss";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const Header = (props) => {
  return (
    <header className="header">
      <h1>Memory Card</h1>
      <ScoreBoard score={props.score} bestScore={props.bestScore} />
    </header>
  );
};

export default Header;
