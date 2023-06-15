/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';

import BookList from './BookList';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <AddBook />
      <BookList {...books} />
    </div>
  );
};

export default Books;
