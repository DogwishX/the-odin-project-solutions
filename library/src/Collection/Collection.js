import { useEffect, useState } from "react";
import "./Collection.css";

function Collection({ books, setBooks }) {
  return (
    <>
      <table className="collection" data-testid="collection">
        <thead className="collection__header">
          <tr>
            <th className="collection__title">Title</th>
            <th className="collection__author">Author</th>
            <th className="collection__status">Status</th>
            <th className="collection__delete"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <Book {...book} index={index} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );

  function Book({ title, author, status, index }) {
    return (
      <tr className="book" id={index} data-testid={`book`}>
        <td className="book__title" data-testid={`book__title`}>
          {title}
        </td>
        <td className="book__author" data-testid={`book__author`}>
          {author}
        </td>
        <td
          className="book__status"
          data-testid={`book__status`}
          onClick={changeStatus}
        >
          {status}
        </td>
        <td
          className="book__delete"
          data-testid={`book__delete`}
          onClick={deleteBook}
        >
          Delete
        </td>
      </tr>
    );
  }
  function deleteBook({ currentTarget }) {
    books.splice(currentTarget.parentNode.id, 1);
    setBooks([...books]);
  }
  function changeStatus({ currentTarget }) {
    const newBooks = [...books];
    newBooks[currentTarget.parentNode.id].status = newBooks[currentTarget.parentNode.id].status === "Read" ? "Not Read" : "Read";
    setBooks([...newBooks]); 
  }
}

export default Collection;
