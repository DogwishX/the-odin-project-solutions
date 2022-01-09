import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import MenuIcon from ".";

describe("menu icon", () => {
  beforeEach(() => render(<MenuIcon />));
  afterEach(() => cleanup());

  test("--active on click", () => {
    const burgerIcon = screen.getByTestId("nav__menu-icon");
    fireEvent.click(burgerIcon);

    expect(burgerIcon.className.includes("--active")).toBe(true);
  });
});
