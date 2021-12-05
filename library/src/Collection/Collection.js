function Collection({ books, setBooks }) {
  return (
    <div className="collection" data-testid="collection">
      {books.map((book, index) => (
        <Book {...book}  key={index} />
      ))}
    </div>
  );

  function Book({ title, author, status, index }) {
    return (
      <div className="book" id={index} data-testid={`book`}>
        <div className="book__title" data-testid={`book__title`}>
          {title}
        </div>
        <div className="book__author" data-testid={`book__author`}>
          {author}
        </div>
        <div className="book__status" data-testid={`book__status`}>
          {status}
        </div>
        <button
          className="book__delete"
          data-testid={`book__delete`}
          onClick={deleteBook}
        >
          Delete
        </button>
      </div>
    );
  }
  function deleteBook({currentTarget}) {
    books.splice(currentTarget.parentNode.id, 1);
    setBooks([...books]);
  }
}

export default Collection;
