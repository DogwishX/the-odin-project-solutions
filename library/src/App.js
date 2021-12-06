import { useEffect, useState } from "react";
import "./App.css";
import NewBookForm from "./NewBookForm/NewBookForm";
import Collection from "./Collection/Collection";

const localStorage = window.localStorage;
function App() {
  const [books, setBooks] = useState(
    (localStorage.books && JSON.parse(localStorage.books)) || []
  );
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify([...books]));
  }, [books]);

  return (
    <>
      <h1 className="title">My book library</h1>
      <p className="project-description">
        This is a project for The Odin Project in which I have to make a library
        using Object Constructors and LocalStorage.'
      </p>
      <NewBookForm books={books} setBooks={setBooks} />
      <Collection books={books} setBooks={setBooks} />
    </>
  );
}

export default App;
