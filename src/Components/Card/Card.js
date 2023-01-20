import React from "react";
import "./Card.scss";

const Card = (props) => {
  const onClickHandler = (e) => {
    props.cardClick(e.target.dataset.value);
  };
  return (
    <div
      data-value={props.val}
      className="card"
      onClick={onClickHandler}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <p className="card__name">{props.agent}</p>
    </div>
  );
};

export default Card;
