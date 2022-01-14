import { loadCards } from "../CardLoader";
import "@testing-library/jest-dom/extend-expect";

describe("CardLoader", () => {
  const cards = loadCards(12);

  test("loadCards should return an array", () => {
    expect(Array.isArray(cards)).toBeTruthy();
  });

  test("loadCards shoud return an array of objects with id,src,status and key keys", () => {
    expect("id" in cards[0]).toBeTruthy();
    expect("src" in cards[0]).toBeTruthy();
    expect("status" in cards[0]).toBeTruthy();
    expect("key" in cards[0]).toBeTruthy();
  });

  test("Should return the 12 cards passed in as parameter", () => {
    expect(cards.length).toBe(12);
  });
});
