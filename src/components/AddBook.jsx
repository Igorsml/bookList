import { BookForm } from "./form/BookForm";

export const AddBook = () => {
  const handleOnSubmit = () => {
    console.log("Add new Book");
  };

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
};
