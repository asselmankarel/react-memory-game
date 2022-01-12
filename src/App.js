import "./App.css";
import Board from "./components/Board";
import NewGameForm from "./components/NewGameForm";
import { useState } from "react";
import { loadCards } from "./data/CardLoader";

const initialState = {
  numberOfPlayers: 0,
  scorePlayer1: 0,
  scorePlayer2: 0,
  turnsPlayer1: 0,
  turnsPlayer2: 0,
  cards: [],
};

function App() {
  const [state, setState] = useState(initialState);

  const handleStartNewGame = (numberOfPlayers, numberOfCards) => {
    console.log(`Players: ${numberOfPlayers}, cards: ${numberOfCards}`);

    const cards = loadCards(numberOfCards);

    setState({
      ...initialState,
      numberOfPlayers,
      cards,
    });
    console.log(cards);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Memory Game</h1>
        <div className="score">
          <h3>Score</h3>
          <p>
            Player 1: <span className="score-number">{state.scorePlayer1}</span>
          </p>
          <p>
            Player 2: <span className="score-number">{state.scorePlayer2}</span>
          </p>
        </div>
      </header>
      {state.cards?.length > 0 ? (
        <Board cards={state.cards} />
      ) : (
        <NewGameForm handleStartNewGame={handleStartNewGame} />
      )}
    </div>
  );
}

export default App;
