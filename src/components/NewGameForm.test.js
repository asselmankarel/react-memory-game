import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

test("New game form renders when clicking new game button", async () => {
  render(<App />);

  userEvent.click(screen.getByRole("button", { name: /newGame/i }));

  expect(
    await screen.findByRole("form", { name: /newGameForm/i })
  ).toBeInTheDocument();
});
