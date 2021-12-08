import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

describe("NewbookForm & Collection integration", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
    window.localStorage.clear();
  });

  test("Renders new Books on click", () => {
    const testBooks = [
      { title: "good book", author: "lolz", status: "Not Read" },
      { title: "good book1", author: "lolz1", status: "Not Read1" },
    ];

    addBooks(testBooks);

    const hasBookRenderedValues = testBooks.every((item) => {
      for (let key in item) {
        const booksElements = screen.getAllByTestId(`book__${key}`);
        return booksElements
          .map((element) => element.innerHTML)
          .includes(item[key])
          ? true
          : false;
      }
    });

    expect(hasBookRenderedValues).toBe(true);
  });

  test("Delete Book on click", () => {
    const testBooks = [
      { title: "good book", author: "lolz", status: "Not Read" },
      { title: "good book1", author: "lolz1", status: "Not Read1" },
    ];

    addBooks(testBooks);

    const deleteBtns = screen.getAllByTestId(/delete/gi);
    fireEvent.click(deleteBtns[0]);
    expect(screen.getAllByTestId(/delete/gi).length).toBe(1);
  });

  test("Change book status when clicked", () => {
    const testBooks = [
      { title: "good book", author: "lolz", status: "Read" },
      { title: "good book1", author: "lolz1", status: "Read" },
    ];
    addBooks(testBooks);

    const statusBtns = screen.getAllByTestId(/book__status/gi);
    fireEvent.click(statusBtns[0]);
    expect(screen.getAllByTestId(/book__status/gi)[0]).toHaveTextContent(
      "Not Read"
    );
  });
});

function addBooks(testBooks, formElements = {}) {
  const addBtn = screen.getByTestId("form__btn");

  for (let item of testBooks) {
    for (let key in item) {
      formElements[key] = screen.getByTestId(`form__${key}`);
      fireEvent.change(formElements[key], { target: { value: item[key] } });
    }
    fireEvent.click(addBtn);
  }
}

describe("localStorage", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
    window.localStorage.clear();
  });

  test("Save new Books", () => {
    const testBooks = [
      { title: "good book", author: "lolz", status: "Not Read" },
      { title: "good book1", author: "lolz1", status: "Read" },
    ];

    addBooks(testBooks);

    expect(JSON.parse(window.localStorage.books)).toStrictEqual(testBooks);
  });

  test("Remove a Book", () => {
    const testBooks = [
      { title: "good book", author: "lolz", status: "Not Read" },
      { title: "good book1", author: "lolz1", status: "Read" },
    ];

    addBooks(testBooks);
    const deleteBtns = screen.getAllByTestId(/delete/gi);
    fireEvent.click(deleteBtns[0]);

    expect(JSON.parse(window.localStorage.books).length).toBe(1);
  });
});
