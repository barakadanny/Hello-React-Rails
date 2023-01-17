import { configureStore } from '@reduxjs/toolkit'
import { greetingSlice } from './greetingSlice'

const initialState = {
  message: ''
};

const store = configureStore({
  reducer: {
    greeting: greetingSlice
  }
});

export default store;
