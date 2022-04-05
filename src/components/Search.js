import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({ changeShelf, books }) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noBooks, setNoBooks] = useState(false);

  useEffect(() => {
    if (!query) {
      setSearchBooks(false);
      return;
    }
    setLoading(true);

    BooksAPI.search(query)
      .then((data) => {
        if (data.error) {
          setSearchBooks(false);
          setNoBooks(true);
        } else {
          setSearchBooks(data);
          setNoBooks(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            autoFocus
            type="text"
            value={query}
            placeholder="Search by title or author"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <div className="search-books-results">
          {error && <div>unecxpected error happened</div>}
          {loading && <div className="Loading">Loading...</div>}
          {noBooks && <div>No books</div>}
          {searchBooks && (
            <ol className="books-grid">
              {searchBooks.map((searchBook) => {
                let shelfName = "none";
                books.map((book) =>
                  book.id === searchBook.id ? (shelfName = book.shelf) : ""
                );
                return (
                  <Book
                    key={searchBook.id}
                    book={searchBook}
                    changeShelf={changeShelf}
                    currentShelf={shelfName}
                  />
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
