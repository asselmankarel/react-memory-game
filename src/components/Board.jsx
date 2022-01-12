import React from "react";
import "./board.css";
import Card from "./Card";

export default function Board({ cards }) {
  console.log(cards);
  const classNames = `board board-${cards.length}`;

  return (
    <div className={classNames}>
      {cards.map((card) => (
        <Card card={card} key={Math.random()} />
      ))}
    </div>
  );
}
