import React, { useState } from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <div className="container">
      <AddBook addBook={addBook} />

      {books.map((book) => (
        <BookItem key={book.id} book={book} deleteBook={deleteBook} />
      ))}
    </div>
  );
};

export default Books;
