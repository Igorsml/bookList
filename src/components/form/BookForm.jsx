import { useState } from "react";

export const BookForm = (props) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const { handleSubmit } = props;
  const isDisabled = !name || !count;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name: name, count: +count });
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleCountChange = (e) => setCount(e.target.value);

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="inputField">
        <input
          onChange={handleNameChange}
          name="book name"
          type="text"
          placeholder="Enter name of book"
        />
      </div>

      <div className="inputField">
        <input
          onChange={handleCountChange}
          name="pageCount"
          type="number"
          placeholder="Enter page count of book"
        />
      </div>
      <button type="submit" className="btnForm" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};
