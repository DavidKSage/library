import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from '../src/components/BookList';
import AddBook from '../src/components/AddBook';
import AppMenu from './components/AppMenu';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<AppMenu />} />
          <Route exact path="/booklist" element={<BookList />} />
          <Route exact path="/addbook" element={<AddBook />} />
        </Routes>
      </Router>
  );
};
export default App;
