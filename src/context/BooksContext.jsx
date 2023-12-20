import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const BooksContext = createContext(null);

export const DataBooksContext = ({ children }) => {
  const [books, setBooks] = useLocalStorage("books", []);
  const [pages, setPages] = useLocalStorage("pages", 0);
  const value = { books, setBooks, pages, setPages };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
