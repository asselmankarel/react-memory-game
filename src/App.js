import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [size, setsize] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
      </header>
      {size && <Board size={size} />}
    </div>
  );
}

export default App;
