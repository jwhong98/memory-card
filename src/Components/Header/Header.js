import React from "react";
import "./Header.scss";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const Header = (props) => {
  // const btnHandler = () => {
  //   props.onClick();
  // };
  return (
    <header className="header">
      <h1>Radiant Memory</h1>
      <ScoreBoard score={props.score} bestScore={props.bestScore} />
      {/* <button className="shuffleBtn" onClick={btnHandler}>
        Shuffle
      </button> */}
    </header>
  );
};

export default Header;
