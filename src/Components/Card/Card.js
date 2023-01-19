import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.img})` }}>
      <p className="card__name">{props.agent}</p>
    </div>
  );
};

export default Card;
