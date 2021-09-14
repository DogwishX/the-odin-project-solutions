import React, { useState } from "react";

function EditableField(props) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(props.children);

  return (
    <div>
      {editable ? (
        <div>
          <input
            onClick={({ target }) => target.select()}
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            type="text"
          />
          <button
            onClick={() => {
              setEditable(!editable);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <p
          onClick={() => {
            setEditable(!editable);
          }}
        >
          {inputValue}
        </p>
      )}
    </div>
  );
}

export default EditableField;
