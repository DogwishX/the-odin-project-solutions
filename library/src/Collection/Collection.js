function Collection({ books }) {
  return <div className="collection">{books.map(book => console.log(book))}</div>;
}

export default Collection;
