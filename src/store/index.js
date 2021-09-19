import { configureStore, createSlice } from '@reduxjs/toolkit';
import todosSlice from './todos-slice';
import categoriesSlice from './categories-slice';
import errorSlice from './error-slice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    categories: categoriesSlice.reducer,
    error: errorSlice.reducer,
  },
});

export default store;
