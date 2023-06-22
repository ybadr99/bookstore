import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories: () => initialState,
  },
});

export const { checkCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
