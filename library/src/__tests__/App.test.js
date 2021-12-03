import {
  render,
  screen,
  cleanup,
  fireEvent,
  findByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

describe("NewbookForm & Collection integration", () => {
  beforeAll(() => {
    render(<App />);
  });

  afterAll(() => {
    cleanup();
  });

  test("Renders new Book on click", () => {
    const testBook = { title: "good book", author: "lolz", status: "Not Read" };
    const addBtn = screen.getByTestId("form__btn");

    const formElements = {};
    for (let key in testBook) {
      formElements[key] = screen.getByTestId(`form__${key}`);
      fireEvent.change(formElements[key], { target: { value: testBook[key] } });
    }

    fireEvent.click(addBtn);
    const hasBookRenderedValues = Object.keys(testBook).every((key) =>
      screen.getByTestId(`book__${key}`).innerHTML === testBook[key]
        ? true
        : false
    );

    expect(hasBookRenderedValues).toBe(true);
  });
}); 
