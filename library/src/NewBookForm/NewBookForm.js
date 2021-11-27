import { useState } from 'react';

function NewBookForm() {
  const [newBookInfo, setNewBookInfo] = useState({
    status: 'Read',
  });

  return (
    <div className='form'>
      <div className='form__input-container'>
        <label htmlFor='book'>Book</label>
        <input id='book' type='text' onChange={handleChange}></input>
      </div>

      <div className='form__input-container'>
        <label htmlFor='author'>Author</label>
        <input id='author' type='text' onChange={handleChange}></input>
      </div>
      <div className='form__input-container'>
        <label htmlFor='status'>Status</label>
        <select id='status' onChange={handleChange}>
          <option>Read</option>
          <option>Not Read</option>
        </select>
      </div>
      <button onClick={addBook}>Add</button>
    </div>
  );
  
  function addBook() {
    const inputFields = document.querySelectorAll('input[type="text"]')
    inputFields.forEach(input => input.value = '')
  }

  function handleChange({ currentTarget }) {
    setNewBookInfo((prevInfo) => ({
      ...prevInfo,
      [currentTarget.id]: currentTarget.value,
    }));
  }
}

export default NewBookForm;
