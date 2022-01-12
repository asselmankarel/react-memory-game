import data from "./cards.json";

export const initialState = {
  numberOfPlayers: 0,
  scorePlayer1: 0,
  scorePlayer2: 0,
  turnsPlayer1: 0,
  turnsPlayer2: 0,
  cards: [],
};

export const loadCards = (numberOfCards) => {
  const cards = [];

  for (let index = 0; index < numberOfCards / 2; index++) {
    const selectedItem = data.splice(
      Math.floor(Math.random() * data.length),
      1
    );
    cards.push({ ...selectedItem[0], status: "hidden" });
  }

  const shuffledDuplicates = cards.sort((a, b) => 0.5 - Math.random());
  const cardsAndDuplicates = cards.concat(shuffledDuplicates);

  return cardsAndDuplicates.map((card) => {
    return { ...card, key: Math.random() };
  });
};
