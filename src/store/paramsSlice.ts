import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemPerPageType } from '../components/ItemsPerPage';

export type Params = {
  page: number;
  limit: ItemPerPageType;
  name?: string;
};

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
      state.page = 1;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeLimit(state, action: PayloadAction<ItemPerPageType>) {
      state.limit = action.payload;
      state.page = 1;
    },
  },
});

export const { changeName, changePage, changeLimit } = paramsSlice.actions;
export default paramsSlice.reducer;
