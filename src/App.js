import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [size, setsize] = useState(null);

  const handleStartNewGame = (numberOfPlayers, numberOfCards) => {
    console.log(`Players: ${numberOfPlayers}, cards: ${numberOfCards}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
      </header>
      {!size && <button name="newGame">New game</button>}
      {size && <Board size={size} />}
    </div>
  );
}

export default App;
