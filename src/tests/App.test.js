import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders memory game title", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", {
      level: 1,
      text: /memory/i,
    });

    expect(titleElement).toBeInTheDocument();
  });
});
