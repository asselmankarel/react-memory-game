import "./App.css";
import Board from "./components/Board";
import NewGameForm from "./components/NewGameForm";
import { useState } from "react";
import { loadCards } from "./data/CardLoader";
import Header from "./components/Header";

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
    const cards = loadCards(numberOfCards);

    setState({
      ...initialState,
      numberOfPlayers,
      cards,
    });
  };

  const handleCardClicked = (card) => {
    if (card.status === "hidden") {
      card.status = "shown";
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
      <Header
        scorePlayer1={state.scorePlayer1}
        scorePlayer2={state.scorePlayer1}
        numberOfPlayers={state.numberOfPlayers}
        onNewGame={handleStartNewGame}
      />
      {state.cards?.length > 0 ? (
        <Board cards={state.cards} onCardClicked={handleCardClicked} />
      ) : (
        <NewGameForm handleStartNewGame={handleStartNewGame} />
      )}
    </div>
  );
}

export default App;
