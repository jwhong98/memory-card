import React, { useState, useEffect } from "react";
import "./Main.scss";
import Header from "../Header/Header";
import Card from "../Card/Card";

const Main = () => {
  const api = "https://valorant-api.com/v1/agents";
  const [agents, setAgents] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const filtered = result.data.filter(
            (el) => el.isPlayableCharacter !== false
          );
          console.log(filtered);
          setAgents(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const scoreUpdater = () => {
    setScore(score + 1);
    console.log(agents.data);
  };
  const resetScore = () => {
    setScore(0);
  };

  const createCard = (data, key) => {
    return <Card key={key} agent={data.displayName} img={data.fullPortrait} />;
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header score={score} bestScore={bestScore} />
        <main>{agents.data.map((el, i) => createCard(el, i))}</main>
      </>
    );
  }
};

export default Main;
