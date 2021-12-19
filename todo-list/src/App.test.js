import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

describe("clickable integrations (small screen)", () => {
  beforeEach(() => {
    window.innerWidth = 300;
    render(<App />);
  });
  afterEach(() => {
    cleanup();
  });

  test("show nav on menu icon click", () => {
    const menu = screen.getByTestId(/header__menu/gi);
    fireEvent.click(menu);
    const nav = screen.getByTestId("nav");
    expect(nav.className.includes("active")).toBe(true);
  });
});
