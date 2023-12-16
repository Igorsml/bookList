import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { BooksList } from "./components/BooksList";
import { AddBook } from "./components/AddBook";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
