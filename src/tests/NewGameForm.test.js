import { render, screen } from "@testing-library/react";

import NewGameForm from "../components/NewGameForm";

test("New game form renders when app starts", async () => {
  render(<NewGameForm />);

  expect(
    await screen.findByRole("form", { name: /newGameForm/i })
  ).toBeInTheDocument();
});
