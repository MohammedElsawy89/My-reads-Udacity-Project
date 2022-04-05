import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Home = ({ books, changeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          section="Currently Reading"
          books={books}
          group="currentlyReading"
          changeShelf={changeShelf}
        />
        <Shelf
          section="Want to Read"
          books={books}
          group="wantToRead"
          changeShelf={changeShelf}
        />
        <Shelf
          section="Read"
          books={books}
          group="read"
          changeShelf={changeShelf}
        />
      </div>

      <div className="open-search">
        <Link to="/search" className="open-search-plus">
          Add a Book
        </Link>
      </div>
    </div>
  );
};

export default Home;
