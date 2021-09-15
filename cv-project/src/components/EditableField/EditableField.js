import React, { useState } from "react";

function EditableField(props) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(props.children);

  function changeEditable() {
    setEditable(!editable);
  }

  function changeInputValue({ target }) {
    setInputValue(target.value);
  }

  return (
    <div>
      {editable ? ( 
        <>
          <input
            data-testid="text"
            type="text"
            value={inputValue}
            onChange={changeInputValue}
          />
          <button data-testid='button' onClick={changeEditable}>Save</button>
        </>
      ) : (
        <p data-testid="text" onClick={changeEditable}>
          {inputValue}
        </p>
      )}
    </div>
  );
}

export default EditableField;
