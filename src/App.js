import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/search">
            <Search changeShelf={changeShelf} books={books} />
          </Route>
          <Route path="/" exact>
            <Home books={books} changeShelf={changeShelf} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
