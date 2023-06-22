import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './BookItem';

const BookList = () => {
  const { books, isLoading } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {books.length
        ? books.map((book) => <BookItem key={book.item_id} book={book} />)
        : 'no books found!'}
    </>
  );
};

export default BookList;
