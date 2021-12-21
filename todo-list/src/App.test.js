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

  test('add project', () => {
    const menu = screen.getByTestId(/header__menu/gi);
    fireEvent.click(menu);

    const addBtn = screen.getByTestId(/projects__add/gi);
    fireEvent.click(addBtn);

    const input = screen.getByTestId(/form__input/gi);
    fireEvent.change(input, { target: { value: 'test project' } });

    const formAddBtn = screen.getByTestId(/form__button/gi);
    fireEvent.click(formAddBtn);

    const newProject = screen.getByText('test project');
    expect(newProject).toBeTruthy();
  })
});
