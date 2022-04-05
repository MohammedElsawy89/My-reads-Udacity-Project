import React from "react";
import Book from "./Book";

const Shelf = ({ section, books, group, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === group)
            .map((book) => (
              <Book
                book={book}
                key={book.id}
                changeShelf={changeShelf}
                books={books}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
