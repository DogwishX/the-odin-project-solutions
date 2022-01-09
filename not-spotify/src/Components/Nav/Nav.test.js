import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Nav from ".";

describe("horizontal nav", () => {
  const itemsArr = ["logo", "profile", "menu"];

  beforeEach(() => {
    window.innerWidth = 480;
    render(<Nav items={itemsArr} logo={"./images/logo192.png"} />);
  });
  afterEach(() => cleanup());

  test("burger icon", () => {
    const burgerIcon = screen.getByTestId("nav__menu");

    expect(burgerIcon).toBeTruthy();
  });
});
