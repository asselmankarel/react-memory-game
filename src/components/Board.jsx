import React from "react";
import "./board.css";
import Card from "./Card";

export default function Board({ cards, onCardClicked }) {
  const classNames = `board board-${cards.length}`;

  const handleClick = (card) => {
    onCardClicked(card);
  };

  return (
    <div className={classNames} data-testid="board">
      {cards.map((card) => (
        <Card card={card} key={card.key} onHandleClick={handleClick} />
      ))}
    </div>
  );
}
