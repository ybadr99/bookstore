/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import restructureApiResponse from '../../utils/restructureApiResponse';

const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ATwGr9HsrW4O0MQXnRyQ/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const res = await axios.get(baseAPI);
    return res.data || [];
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await axios.post(baseAPI, newBook);
    return newBook;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${baseAPI}/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  books: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    // get books
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchBooks.fulfilled]: (state, actions) => {
      state.isLoading = false;
      const books = restructureApiResponse(actions.payload);
      state.books = books;
    },

    [fetchBooks.rejected]: (state) => {
      state.isLoading = true;
    },

    // add book
    [addBook.pending]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.books.push(actions.payload);
    },
    [addBook.rejected]: (state) => {
      state.isLoading = false;
    },

    // remove book
    [removeBook.pending]: (state) => {
      state.isLoading = true;
    },

    [removeBook.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== actions.payload,
      );
    },

    [removeBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default booksSlice.reducer;
