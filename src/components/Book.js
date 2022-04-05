const Book = ({ book, changeShelf, currentShelf }) => {
  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: book.imageLinks
                  ? `url(${book.imageLinks.thumbnail})`
                  : "",
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={book.shelf ? book.shelf : currentShelf}
                onChange={(e) => changeShelf(book, e.target.value)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors : "no author available"}
          </div>
        </div>
      </li>
    </div>
  );
};

export default Book;
