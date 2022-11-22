import { configureStore } from '@reduxjs/toolkit';
import courtReducer from '../features/courtSlice';


export const store = configureStore({
  reducer: {
    courts: courtReducer,
  },
});
