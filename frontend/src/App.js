import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from '../src/components/BookList/BookList';
import AppMenu from './components/AppMenu/AppMenu';

// function App() {
//   return (
//     <div className="App">
//       <AppHead />
//     </div>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<AppMenu />} />
          <Route exact path="/booklist" element={<BookList />} />
        </Routes>
      </Router>
  );
};
export default App;
