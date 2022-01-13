export const loadCards = (numberOfCards) => {
  const cards = [];
  let data = [
    { id: 1, src: "images/australian-cattle-dog.jpg" },
    { id: 2, src: "images/avocets.jpg" },
    { id: 3, src: "images/black-skimmer.jpg" },
    { id: 4, src: "images/cat.jpg" },
    { id: 5, src: "images/cormorant.jpg" },
    { id: 6, src: "images/dog.jpg" },
    { id: 7, src: "images/ducks.jpg" },
    { id: 8, src: "images/egrets.jpg" },
    { id: 9, src: "images/elephant.jpg" },
    { id: 10, src: "images/ibis.jpg" },
    { id: 11, src: "images/peacock.jpg" },
    { id: 12, src: "images/snake.jpg" },
    { id: 13, src: "images/snow-fox.jpg" },
    { id: 14, src: "images/turtle.jpg" },
    { id: 15, src: "images/wood-duck.jpg" },
    { id: 16, src: "images/woodpecker.jpg" },
  ];

  for (let index = 0; index < numberOfCards / 2; index++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedItem = data.splice(randomIndex, 1);
    cards.push({ ...selectedItem[0], status: "hidden" });
  }

  const shuffledDuplicates = cards.sort((a, b) => 0.5 - Math.random());
  const cardsAndDuplicates = cards.concat(shuffledDuplicates);

  return cardsAndDuplicates.map((card) => {
    return { ...card, key: Math.random() };
  });
};
