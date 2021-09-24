import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos-slice';
import categoriesSlice from './categories-slice';
import errorSlice from './error-slice';
import loadingSlice from './loading-slice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    categories: categoriesSlice.reducer,
    error: errorSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
