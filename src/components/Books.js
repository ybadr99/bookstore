import BookList from './BookList';
import AddBook from './AddBook';

const Books = () => (
  <div className="container">
    <BookList />
    <div className="divider" />
    <AddBook />
  </div>
);

export default Books;
