import React from "react";
import "./card.css";

export default function Card({ card }) {
  const onClick = (id) => {};

  return (
    <div className="card" onClick={() => onClick(card.id)}>
      <img className="card-front" src={card.src} alt="" />
      <img className="card-back" src="images/card-back.jpg" alt="card back" />
    </div>
  );
}
