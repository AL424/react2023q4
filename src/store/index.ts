import { configureStore } from '@reduxjs/toolkit';
import paramsReduser from './paramsSlice';

const store = configureStore({
  reducer: {
    params: paramsReduser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
