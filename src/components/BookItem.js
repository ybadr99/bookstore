import React from 'react';

const BookItem = ({ book, deleteBook }) => (
  <div>
    <li className="book-item">
      <p>{book.name}</p>
      <span className="author">{book.author}</span>
      <button onClick={() => deleteBook(book.id)} type="button">
        Delete
      </button>
    </li>
  </div>
);

export default BookItem;
