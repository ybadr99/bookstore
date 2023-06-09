import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && author.trim() !== '') {
      const newBooks = {
        id: new Date().getTime(),
        name,
        author,
      };
      addBook(newBooks);
      setName('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddBook;
