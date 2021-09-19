import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    isError: false,
    errorInfo: '',
  },
  reducers: {
    activateError(state, action) {
      state.isError = true;
      state.errorInfo = action.payload;
    },
    deactivateError(state) {
      state.isError = false;
      state.errorInfo = '';
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice;
