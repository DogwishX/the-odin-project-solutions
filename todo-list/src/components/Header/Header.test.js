import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("render", () => {
  beforeEach(() => render(<Header />));
  afterEach(() => cleanup());

  test("logo", () => {
    const logo = screen.getByTestId(/logo/gi);
    expect(logo).toBeTruthy();
  });
});
 