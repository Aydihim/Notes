import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { Id_tag, Tag, Page_size, State } from './types/types';

const initialState: State = {
  tags_arr: [],
  total_pages: 0,
  for_get: true,
  error: undefined,
};

export const init_tags = createAsyncThunk(
  'tag/init',
  (action: Page_size) => api.init_tags_api(action),
);

export const add_tag = createAsyncThunk(
  'tag/add',
  (action: Tag) => api.add_tag_api(action),
);

export const delete_tag = createAsyncThunk(
  'tag/del',
  (id: Id_tag) => api.delete_tag_api(id),
);


const tags_slice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(init_tags.fulfilled, (state, action) => {
        state.tags_arr = action.payload.tag_rows;
        state.total_pages = action.payload.total_pages;
      })
      .addCase(init_tags.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(add_tag.fulfilled, (state, action) => {
        state.tags_arr.push(action.payload);
        state.for_get = !state.for_get;
      })
      .addCase(add_tag.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delete_tag.fulfilled, (state, action) => {
        state.tags_arr = state.tags_arr.filter(
          (tag) => tag.id !== Number(action.payload),
        );
        state.for_get = !state.for_get;
      })
      .addCase(delete_tag.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default tags_slice.reducer;
