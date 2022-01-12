import data from "./cards.json";

export const loadCards = (numberOfCards) => {
  const cards = [];

  for (let index = 0; index < numberOfCards / 2; index++) {
    const selectedItem = data.splice(
      Math.floor(Math.random() * data.length),
      1
    );
    cards.push(selectedItem[0]);
  }

  const shuffledDuplicates = cards.sort((a, b) => 0.5 - Math.random());

  return [...cards, ...shuffledDuplicates];
};
