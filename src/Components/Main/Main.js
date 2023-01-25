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
          // filter result so that we dont get duplicate data
          const filtered = result.data.filter(
            (el) => el.isPlayableCharacter !== false
          );
          setAgents(filtered);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const scoreUpdater = () => {
    setScore(score + 1);
  };
  const resetScore = () => {
    setScore(0);
  };
  const updateBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };
  const cardClickHandler = (name) => {
    if (!selected.includes(name)) {
      setSelected((prevArr) => [...prevArr, name]);
      scoreUpdater();
    } else {
      updateBestScore();
      setSelected([]);
      resetScore();
    }
    shuffleArray();
  };

  const shuffleArray = () => {
    setAgents(agents.sort(() => Math.random() - 0.5));
  };

  const createCard = (data, key) => {
    return (
      <Card
        key={key}
        val={data.displayName}
        agent={data.displayName}
        img={data.fullPortrait}
        cardClick={cardClickHandler}
      />
    );
  };

  const firstTen = () => {
    return agents.slice(0, 10).map((el, i) => createCard(el, i));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header score={score} bestScore={bestScore} onClick={shuffleArray} />
        <main>
          <div className="gameBoard">{firstTen()}</div>
        </main>
      </>
    );
  }
};

export default Main;
