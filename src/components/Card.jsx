import React from "react";
import "./card.css";

export default function Card({ card, onHandleClick }) {
  const onClick = (card) => {
    if (card.status !== "completed") {
      onHandleClick(card);
    }
  };

  return (
    <div className="card" onClick={() => onClick(card)}>
      <img
        className={card.status !== "hidden" ? "card-front shown" : "card-front"}
        src={card.src}
        alt=""
      />
      <img
        className={card.status === "hidden" ? "card-back" : "card-back hidden"}
        src="images/card-back.jpg"
        alt="card back"
      />

      {card.status === "completed" && (
        <img className="completed" src="images/checkmark.png" alt="" />
      )}
    </div>
  );
}
