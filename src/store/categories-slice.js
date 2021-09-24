import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    currentCategory: '',
  },
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter(cat => cat !== action.payload);
    },
    replaceCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;
