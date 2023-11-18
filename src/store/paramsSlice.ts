import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Params } from '../services/kpApi';
import { ItemPerPageType } from '../components/ItemsPerPage';

const initialState: Params = {
  name: localStorage.getItem('searchString') || undefined,
  page: 1,
  limit: 10,
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      const string = action.payload;
      localStorage.setItem('searchString', string);
      state.name = string;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeLimit(state, action: PayloadAction<ItemPerPageType>) {
      state.limit = action.payload;
    },
  },
});

export const { changeName, changePage, changeLimit } = paramsSlice.actions;
export default paramsSlice.reducer;
