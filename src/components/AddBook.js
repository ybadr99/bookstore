import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        item_id: new Date().getTime().toString(),
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <section className="form-section">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="title-input"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          className="author-input"
          placeholder="Book author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />

        <button className="primary-button" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default AddBook;
