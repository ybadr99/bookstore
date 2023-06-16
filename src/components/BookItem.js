import { useDispatch } from 'react-redux';
import React from 'react';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-item">
      <div className="book-details">
        <p className="book-category">Action</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <div className="book-buttons">
          <button type="button" className="add-button">
            Add
          </button>
          <button
            type="button"
            className="remove-button"
            onClick={() => dispatch(removeBook(book.item_id))}
          >
            Remove
          </button>
          <button type="button" className="edit-button">
            Edit
          </button>
        </div>
      </div>

      <div className="progress-container">
        <div className="circular-progress" />
        <div className="progress-status">
          <p className="percent-complete">50%</p>
          <p className="completed-tag">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div>
            <button className="update-progress" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookItem;
