export const UserInput = ({ labelText, onChangeInput }) => {
  const handleInputChange = (event) => {
    onChangeInput(parseFloat(event.target.value));
  };

  return (
    <>
      <p>
        <label>{labelText}</label>
        <input type="number" onChange={handleInputChange} />
      </p>
    </>
  );
};
