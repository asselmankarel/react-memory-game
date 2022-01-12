import React, { useState } from "react";

export default function NewGameForm({ handleStartNewGame }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [numberOfCards, setNumberOfCards] = useState(12);

  const onSubmit = (e) => {
    e.preventDefault();
    handleStartNewGame(numberOfPlayers, numberOfCards);
  };

  return (
    <form onSubmit={onSubmit} name="newGameForm">
      <div>
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
      <div>
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
      <button type="submit">Start</button>
    </form>
  );
}
