import { useState } from "react";
import "./NewBookForm.css";

function NewBookForm({ books, setBooks }) {
  const [newBookInfo, setNewBookInfo] = useState({
    status: "Read",
  });
  return (
    <div className="form">
      <div className="form__fieldr">
        <label htmlFor="form__title">Book</label>
        <input
          className="form__input"
          id="form__title"
          type="text"
          data-testid="form__title"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form__input-container">
        <label htmlFor="form__author">Author</label>
        <input
          id="form__author"
          className="form__input"
          type="text"
          data-testid="form__author"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form__input-container">
        <label htmlFor="form__status">Status</label>
        <select
          id="form__status"
          className="form__input"
          data-testid="form__status"
          onChange={handleChange}
        >
          <option>Read</option>
          <option>Not Read</option>
        </select>
      </div>
      <button className="form__btn" data-testid="form__btn" onClick={addBook}>
        Add
      </button>
    </div>
  );

  function addBook() {
    const inputFields = document.querySelectorAll('input[type="text"]');
    setBooks([...books, newBookInfo]);
    inputFields.forEach((input) => (input.value = ""));
  }

  function handleChange({ currentTarget }) {
    setNewBookInfo((prevInfo) => ({
      ...prevInfo,
      [currentTarget.id.slice(6)]: currentTarget.value,
    }));
  }
}

export default NewBookForm;
