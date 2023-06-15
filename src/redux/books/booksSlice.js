/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import restructureApiResponse from '../../utils/restructureApiResponse';

const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ATwGr9HsrW4O0MQXnRyQ/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  // eslint-disable-next-line consistent-return
  async (_, _thunkAPI) => {
    try {
      const res = await axios.get(baseAPI);
      return res.data || [];
    } catch (error) {
      console.log(error);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook, thunkAPI) => {
    try {
      const res = await axios.post(baseAPI, newBook);
      if (res.data === 'Created') {
        return newBook;
      }
    } catch (error) {
      console.log(error);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${baseAPI}/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  books: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    // get books
    [getBooks.pending]: (state, actions) => {
      state.isLoading = true;
    },

    [getBooks.fulfilled]: (state, actions) => {
      state.isLoading = false;
      const books = restructureApiResponse(actions.payload);
      state.books = books;
    },

    [getBooks.rejected]: (state, actions) => {
      state.isLoading = true;
    },

    // add book
    [addBook.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.books.push(actions.payload);
    },
    [addBook.rejected]: (state, actions) => {
      state.isLoading = false;
    },

    // remove book
    [removeBook.pending]: (state, actions) => {
      state.isLoading = true;
    },

    [removeBook.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== actions.payload,
      );
    },

    [removeBook.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

export default booksSlice.reducer;
