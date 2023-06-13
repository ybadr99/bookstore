import { useDispatch } from 'react-redux';
import React from 'react';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li className="book-item">
        <p>{book.title}</p>
        <span className="author">{book.author}</span>
        <span className="category">{book.category}</span>
        <button
          type="button"
          onClick={() => dispatch(removeBook({ id: book.id }))}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default BookItem;
