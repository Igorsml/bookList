import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { BooksList } from "./components/BooksList";
import { AddBook } from "./components/AddBook";
import { DataBooksContext } from "./context/BooksContext";
import "./App.css";

function App() {
  return (
    <div className="container">
      <DataBooksContext>
        <Header />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </DataBooksContext>
    </div>
  );
}

export default App;
