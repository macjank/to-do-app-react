import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    replaceTodos(state, action) {
      state.todos = action.payload ? action.payload : [];
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleIsDone(state, action) {
      const changedTodo = state.todos.find(todo => todo.id === action.payload);
      changedTodo.isDone = !changedTodo.isDone;
    },
    editTodo(state, action) {
      const editedTodo = state.todos.find(
        todo => todo.id === action.payload.id
      );

      editedTodo.name = action.payload.name;
      editedTodo.category = action.payload.category;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
