import { configureStore } from '@reduxjs/toolkit';
import paramsReduser from './paramsSlice';
import { kpApi } from './kpApi';

const store = configureStore({
  reducer: {
    params: paramsReduser,
    [kpApi.reducerPath]: kpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kpApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
