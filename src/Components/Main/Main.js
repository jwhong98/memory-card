import React, { useState } from "react";
import Header from "../Header/Header";

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const scoreUpdater = () => {
    setScore(score + 1);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        <button onClick={scoreUpdater}>Update Score</button>
        <button onClick={resetScore}>Reset Score</button>
      </main>
    </>
  );
};

export default Main;
