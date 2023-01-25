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

  // const btnHandler = () => {
  //   if (selected.length === 0) {
  //     setSelected([]);
  //   } else {
  //     setSelected(...selected);
  //   }
  //   shuffleArray();
  // };

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header score={score} bestScore={bestScore} />
        <main>
          <div className="gameBoard">
            {agents.slice(0, 10).map((el, i) => createCard(el, i))}
          </div>
        </main>
      </>
    );
  }
};

export default Main;
