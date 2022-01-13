import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Board from "../components/Board";
import { loadCards } from "../data/CardLoader";

// test("New game form renders when app starts", async () => {
//   render(<Board cards={loadCards(12)}/>);

//   expect(await screen.findBy).toBeInTheDocument()
// });
