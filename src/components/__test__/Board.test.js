import { render, screen } from "@testing-library/react";
import Board from "../Board";
import { loadCards } from "../../data/CardLoader";

describe("Board", () => {
  test("Board renders", async () => {
    render(<Board cards={loadCards(12)} />);

    expect(await screen.findByTestId("board")).toBeInTheDocument();
  });
});
