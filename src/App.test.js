import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders memory game title", () => {
  render(<App />);
  const titleElement = screen.getByRole("heading", { text: /memory game/i });

  expect(titleElement).toBeInTheDocument();
});
