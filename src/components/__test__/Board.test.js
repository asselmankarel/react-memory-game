import { render, screen } from "@testing-library/react";
import Board from "../Board";
import { loadCards } from "../../data/CardLoader";

describe("Board tests", () => {
  test("Board render", async () => {
    render(<Board cards={loadCards(12)} />);

    expect(await screen.findByTestId("board")).toBeInTheDocument();
  });
});
