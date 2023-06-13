import { useSelector } from 'react-redux';
import BookItem from './BookItem';

import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="container">
      <AddBook />

      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
