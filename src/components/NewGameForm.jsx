import React, { useState } from "react";

export default function NewGameForm({ handleStartNewGame }) {
  const [numberOfPlayers, setnumberOfPlayers] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    handleStartNewGame(2, 16);
  };

  return (
    <form onSubmit={onSubmit} name="newGameForm">
      <label htmlFor="numberOfPLayers">Number of players:</label>
      <select name="numberOfPlayers" id="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <label htmlFor="numberOfCards">Number of cards:</label>
      <select name="numberOfCards">
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="32">32</option>
      </select>
      <button type="submit">Start</button>
    </form>
  );
}
