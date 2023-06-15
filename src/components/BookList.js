import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/booksSlice';
import BookItem from './BookItem';

const BookList = ({ books, isLoading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      {books.length ? books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      )) : 'no books found!'}
    </>
  );
};

export default BookList;
