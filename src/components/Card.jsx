import React from "react";
import "./card.css";

export default function Card({ id, imageSrc }) {
  const onClick = (id) => {};

  return (
    <div className="card" onClick={() => onClick(id)}>
      <img className="card-front" src={imageSrc} alt="" />
      <img className="card-back" src="images/card-back.jpg" alt="card back" />
    </div>
  );
}
