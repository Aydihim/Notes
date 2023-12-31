import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { Id_note, Note, Page_size, State } from './types/types';

const initialState: State = {
  notes_arr: [],
  detail_note: {} as Note,
  total_pages: 0,
  for_get: true,
  error: undefined,
};

export const init_notes = createAsyncThunk('note/init', (action: Page_size) =>
  api.init_notes_api(action),
);

export const one_note = createAsyncThunk('note/one', (id: Id_note) =>
  api.one_note_api(id),
);

export const add_note = createAsyncThunk('note/add', (action: Note) =>
  api.add_note_api(action),
);

export const delete_note = createAsyncThunk('note/del', (id: Id_note) =>
  api.delete_note_api(id),
);

export const update_note = createAsyncThunk('note/upd', (action: Note) =>
  api.upd_note_api(action),
);

const notes_slice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(init_notes.fulfilled, (state, action) => {
        state.notes_arr = action.payload.note_rows;
        state.total_pages = action.payload.total_pages;
      })
      .addCase(init_notes.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(one_note.fulfilled, (state, action) => {
        state.detail_note = action.payload;
      })
      .addCase(one_note.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(add_note.fulfilled, (state, action) => {
        state.notes_arr.push(action.payload);
        state.for_get = !state.for_get;
      })
      .addCase(add_note.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delete_note.fulfilled, (state, action) => {
        state.notes_arr = state.notes_arr.filter((note) => note.id !== Number(action.payload));
        state.for_get = !state.for_get;
      })
      .addCase(delete_note.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(update_note.fulfilled, (state, action) => {
        state.notes_arr = state.notes_arr.map((note) =>
          note.id === action.payload.id ? action.payload : note,
        );
      })
      .addCase(update_note.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default notes_slice.reducer;
