import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Collection from "../Collection/Collection.js";

const books = [
  { title: "good book0", author: "lolz0", status: "read" },
  { title: "good book1", author: "lolz1", status: "not read" },
  { title: "good book2", author: "lolz2", status: "read" },
  { title: "good book3", author: "lolz3", status: "not read" },
]; 

beforeEach(() => {
  render(<Collection books={books} />);
});

afterEach(() => {
  cleanup();
});

describe("Render Books", () => {
  test("Divs", () => {
    const renderedBooksArr = screen.getAllByTestId("book");
    expect(renderedBooksArr.length).toBe(4);
  });

  test("Title", () => {
    const bookTitles = screen.getAllByTestId(/title/gi);
    expect(bookTitles.map((title) => title.innerHTML)).toStrictEqual(
      books.map((book) => book.title)
    );
  });

  test("Author", () => {
    const bookAuthors = screen.getAllByTestId(/author/gi);
    expect(bookAuthors.map((author) => author.innerHTML)).toStrictEqual(
      books.map((book) => book.author)
    );
  });

  test("Status", () => {
    const bookStatus = screen.getAllByTestId(/status/gi);
    expect(bookStatus.map((status) => status.innerHTML)).toStrictEqual(
      books.map((book) => book.status)
    );
  });
  test("Delete", () => {  
    const deleteBtn = screen.getAllByTestId(/delete/gi);
    expect(deleteBtn).toBeTruthy();
  });
});