function Collection({ books }) {
  return (
    <div className="collection" data-testid="collection">
      {books.map((book, index) => (
        <Book {...book} key={index} />
      ))}
    </div>
  );
}

function Book({ title, author, status }) {
  return (
    <div className="book" data-testid={`book`}>
      <div className="book__title" data-testid={`book__title`}>
        {title}
      </div>
      <div className="book__author" data-testid={`book__author`}>
        {author}
      </div>
      <div className="book__status" data-testid={`book__status`}>
        {status}
      </div>
    </div>
  );
}

export default Collection;
