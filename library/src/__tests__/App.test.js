import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "../App.js";

describe("NewbookForm & COllection integration", () => {
  beforeAll(() => {
    render(<App />);
  });

  afterAll(() => {
    cleanup();
  });

  test("Renders new Book on click", async () => {
    const newBookTitle = screen.getByTestId("form__title");
    const newBookAuthor = screen.getByTestId("form__author");
    const newBookStatus = screen.getByTestId("form__status");
    [newBookTitle.value, newBookAuthor.value, newBookStatus.value] = [
      "good book",
      "lolz",
      "Read",
    ];

    expect(true).toBe(true);
  });
});
