import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders mermory game title", () => {
  render(<App />);
  const linkElement = screen.getByText(/memory game/i);

  expect(linkElement).toBeInTheDocument();
});
