import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("render", () => {
  beforeEach(() => render(<Header />));
  afterEach(() => {
    cleanup();
    window.innerWidth = 1000;
  });

  test("logo", () => {
    const logo = screen.getByTestId(/header__logo/gi);
    expect(logo).toBeTruthy();
  });
  test("title", () => {
    const title = screen.getByTestId(/header__title/gi);
    expect(title).toBeTruthy();
  });
  test("menuIcon - small screen", () => {
    window.innerWidth = 300;
    render(<Header />);
    const menu = screen.getByTestId(/header__menu/gi);
    expect(menu).toBeTruthy();
  });
  test("menuIcon - not present in big screen", () => {
    const menu = screen.queryByTestId(/header__menu/gi);
    expect(menu).toBeFalsy();
  });
});
