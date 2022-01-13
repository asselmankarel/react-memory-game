import React from "react";
import "./header.css";

export default function Header({
  scorePlayer1,
  scorePlayer2,
  numberOfPlayers,
  onNewGame,
}) {
  const handleClick = () => {
    if (numberOfPlayers !== 0) onNewGame();
  };

  return (
    <header className="app-header">
      <button className="button" onClick={handleClick}>
        New Game
      </button>
      <h1>Memory</h1>
      <div className="score">
        <h3>Score</h3>
        {numberOfPlayers > 0 && (
          <p>
            Player 1: <span className="score-number">{scorePlayer1}</span>
          </p>
        )}
        {numberOfPlayers > 1 && (
          <p>
            Player 2: <span className="score-number">{scorePlayer2}</span>
          </p>
        )}
      </div>
    </header>
  );
}
