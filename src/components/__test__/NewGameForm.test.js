import { render, screen } from "@testing-library/react";

import NewGameForm from "../NewGameForm";

test("New game form renders when app starts", async () => {
  render(<NewGameForm />);

  expect(await screen.findByTestId("newGameForm")).toBeInTheDocument();
});
