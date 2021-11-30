import { useState } from "react";
import "./App.css";
import NewBookForm from "./NewBookForm/NewBookForm";
import Collection from "./Collection/Collection"

function App() {
  const [books, setBooks] = useState([]);
  return (
    <>
      <h1 className="title">My book library</h1>
      <p className="project-description">
        This is a project for The Odin Project in which I have to make a library
        using Object Constructors and LocalStorage.'
      </p>
      <NewBookForm books={books} setBooks={setBooks} />
      <Collection books={books}/>
    </>
  );
}

export default App;
