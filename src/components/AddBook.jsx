import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";
import { BookForm } from "./form/BookForm";

export const AddBook = () => {
  const { books, setBooks, pages, setPages } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleOnSubmit = (value) => {
    setBooks([...books, value]);
    setPages(pages + +value.count);
    navigate("/");
  };

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
};
