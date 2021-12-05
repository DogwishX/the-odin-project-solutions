import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

describe("NewbookForm & Collection integration", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("Renders new Books on click", () => {
    const testBook = { title: "good book", author: "lolz", status: "Not Read" };
    const addBtn = screen.getByTestId("form__btn");

    const formElements = {};
    for (let key in testBook) {
      formElements[key] = screen.getByTestId(`form__${key}`);
      fireEvent.change(formElements[key], { target: { value: testBook[key] } });
    }

    fireEvent.click(addBtn);
    const hasBookRenderedValues = Object.keys(testBook).every((key) => {
      return screen.getByTestId(`book__${key}`).innerHTML === testBook[key]
        ? true
        : false;
    });

    expect(hasBookRenderedValues).toBe(true);
  });

  test("Delete Book on click", () => {
    const addBtn = screen.getByTestId("form__btn");
    const testBook = [
      { title: "good book", author: "lolz", status: "Not Read" },
      { title: "good book1", author: "lolz1", status: "Not Read1" },
    ];

    const formElements = {};
    for (let key of testBook) {
      console.log(key)
      // formElements[key] = screen.getByTestId(`form__${key}`);
      // fireEvent.change(formElements[key], { target: { value: testBook[key] } });
    }
    fireEvent.click(addBtn);

    // const deleteBtns = screen.getAllByTestId(/delete/gi);
    // console.log(deleteBtns);
    // fireEvent.click(deleteBtns[0]);
    // expect(screen.getAllByTestId(/delete/gi)).toBeFalsy();
  });
});
