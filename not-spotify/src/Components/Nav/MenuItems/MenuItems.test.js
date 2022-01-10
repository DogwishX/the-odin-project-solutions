import { render, screen, cleanup } from "@testing-library/react";
import MenuItems from ".";

describe("render", () => {
  const items = ["test1", "test2", "test3"];
  beforeEach(() => render(<MenuItems items={items} />));

  test("items", () => {
    const navItems = screen.getAllByTestId("nav__item");
    const navItemsInnerHtml = navItems.map((item) => item.innerHTML);
    expect(navItemsInnerHtml).toStrictEqual(["test1", "test2", "test3"]);
  });
});
