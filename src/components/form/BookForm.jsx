export const BookForm = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input name={name} type="text" placeholder={placeholder} />
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField("book name", "Enter name of book", "name")}
      {renderInputField("page count", "Enter page count of book", "count")}
      <button type="submit" className="btnForm">
        Submit
      </button>
    </form>
  );
};
