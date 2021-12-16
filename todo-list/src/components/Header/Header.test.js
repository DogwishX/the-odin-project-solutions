import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("render", () => {
  beforeEach(() => render(<Header />));
  afterEach(() => cleanup());

  test("logo", () => {
    const logo = screen.getByTestId(/header__logo/gi);
    expect(logo).toBeTruthy();
  });
  test("title", () => {
    const title = screen.getByTestId(/header__title/gi);
    expect(title).toBeTruthy();
  });
  test("menuIcon - small screen", () => {
    const menu = screen.getByTestId(/header__menu/gi);
    window.innerWidth = 300;
    expect(menu).toBeTruthy();
  });
//   test('menuIcon - not present in big screen', () => {
//     const menu = screen.getByTestId(/header__menu/gi);
//     expect(menu).toBeFalsey();
//   })
});
