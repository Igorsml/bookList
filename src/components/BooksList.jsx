import uuid from "react-uuid";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { Book } from "./Book";

export const BooksList = () => {
  const { books, setBooks, pages } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <>
      <h3>{pages && `Total pages count: ${pages}`}</h3>
      <h3>{pages && `Total books count: ${books.length}`}</h3>
      <div className="books-list">
        {books.length ? (
          books.map((book) => (
            <Book book={book} key={uuid} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p>Books list is empty. Please add book</p>
        )}
      </div>
    </>
  );
};
