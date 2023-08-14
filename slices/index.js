import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice.js';

export default configureStore({
  reducer: {
    // свойство counter будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
  },
});