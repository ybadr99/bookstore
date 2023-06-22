import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      const newBook = {
        item_id: new Date().getTime().toString(),
        title,
        author: 'me',
        category,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setCategory('');
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

        <select
          className="category-input"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option>none</option>
          <option>Programming</option>
          <option>Action</option>
          <option>Self development</option>
        </select>

        <button className="submit-button" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default AddBook;
