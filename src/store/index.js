import { configureStore, createSlice } from "@reduxjs/toolkit";
import todosSlice from "./todos-slice";
import categoriesSlice from "./categories-slice";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});



export default store;
