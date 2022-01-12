import "./App.css";
import Board from "./components/Board";
import NewGameForm from "./components/NewGameForm";
import { useState } from "react";
import { loadCards, initialState } from "./data/CardLoader";

function App() {
  const [state, setState] = useState(initialState);

  const handleStartNewGame = (numberOfPlayers, numberOfCards) => {
    const cards = loadCards(numberOfCards);
    setState({
      ...initialState,
      numberOfPlayers,
      cards,
    });
  };

  const handleCardClicked = (card) => {
    switch (card.status) {
      case "hidden":
        card.status = "shown";
        break;
      case "shown":
        card.status = "hidden";
        break;
      default:
        break;
    }

    let updatedCards = state.cards.map((c) => (c.key === card.key ? card : c));
    const visibleCards = updatedCards.filter((card) => card.status === "shown");

    setState({ ...state, cards: updatedCards });

    if (visibleCards.length === 2) {
      if (visibleCards[0].id === visibleCards[1].id) {
        //match
        updatedCards = updatedCards.map((card) =>
          card.id === visibleCards[0].id
            ? { ...card, status: "completed" }
            : card
        );
        setState({
          ...state,
          scorePlayer1: state.scorePlayer1 + 2,
          cards: updatedCards,
        });
      } else {
        //mismatch
        updatedCards = updatedCards.map((card) =>
          card.key === visibleCards[0].key || card.key === visibleCards[1].key
            ? { ...card, status: "hidden" }
            : card
        );
        setTimeout(() => setState({ ...state, cards: updatedCards }), 800);
      }
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Memory</h1>
        <div className="score">
          <h3>Score</h3>
          <p>
            Player 1: <span className="score-number">{state.scorePlayer1}</span>
          </p>
          {state.numberOfPlayers > 1 && (
            <p>
              Player 2:{" "}
              <span className="score-number">{state.scorePlayer2}</span>
            </p>
          )}
        </div>
      </header>
      {state.cards?.length > 0 ? (
        <Board cards={state.cards} onCardClicked={handleCardClicked} />
      ) : (
        <NewGameForm handleStartNewGame={handleStartNewGame} />
      )}
    </div>
  );
}

export default App;
