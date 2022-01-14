import React, { useState } from "react";
import "./newGameForm.css";

export default function NewGameForm({ handleStartNewGame }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [numberOfCards, setNumberOfCards] = useState(12);

  const onSubmit = (e) => {
    e.preventDefault();
    handleStartNewGame(numberOfPlayers, numberOfCards);
  };

  return (
    <form onSubmit={onSubmit} name="newGameForm" data-testid="newGameForm">
      <div className="row">
        <h3>New Game</h3>
      </div>
      <div className="row">
        <label htmlFor="numberOfPLayers">Number of players:</label>
        <select
          name="numberOfPlayers"
          onChange={(e) => setNumberOfPlayers(e.target.value)}
          value={numberOfPlayers}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="numberOfCards">Number of cards:</label>
        <select
          name="numberOfCards"
          onChange={(e) => setNumberOfCards(e.target.value)}
          value={numberOfCards}
        >
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </div>
      <div className="row">
        <button type="submit">Start</button>
      </div>
    </form>
  );
}
