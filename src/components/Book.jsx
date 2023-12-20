// import { useContext } from "react";
// import { BooksContext } from "../context/BooksContext";

export const Book = ({ book }) => {
  return (
    <div className="book">
      <p>Book name: {book?.name}</p>
      <p>Books pages: {book?.count}</p>
    </div>
  );
};
