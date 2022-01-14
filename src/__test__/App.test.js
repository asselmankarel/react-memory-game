import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  render(<App />);

  test("renders memory game title", () => {
    const titleElement = screen.getByRole("heading", {
      level: 1,
      text: /memory/i,
    });

    expect(titleElement).toBeInTheDocument();
  });

  test("Should not render the board on app start", () => {
    expect(screen.queryByTestId("board")).not.toBeInTheDocument();
  });
});
