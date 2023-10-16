import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { Id_reminder, Reminder, Page_size, State } from './types/types';

const initialState: State = {
  reminders_arr: [],
  detail_reminder: {} as Reminder,
  total_pages: 0,
  for_get: true,
  error: undefined,
};

export const init_reminders = createAsyncThunk(
  'reminder/init',
  (action: Page_size) => api.init_reminders_api(action),
);

export const one_reminder = createAsyncThunk(
  'reminder/one',
  (id: Id_reminder) => api.one_reminder_api(id),
);

export const add_reminder = createAsyncThunk(
  'reminder/add',
  (action: Reminder) => api.add_reminder_api(action),
);

export const delete_reminder = createAsyncThunk(
  'reminder/del',
  (id: Id_reminder) => api.delete_reminder_api(id),
);

export const update_reminder = createAsyncThunk(
  'reminder/upd',
  (action: Reminder) => api.upd_reminder_api(action),
);

const reminders_slice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(init_reminders.fulfilled, (state, action) => {
        state.reminders_arr = action.payload.reminder_rows;
        state.total_pages = action.payload.total_pages;
      })
      .addCase(init_reminders.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(one_reminder.fulfilled, (state, action) => {
        state.detail_reminder = action.payload;
      })
      .addCase(one_reminder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(add_reminder.fulfilled, (state, action) => {
        state.reminders_arr.push(action.payload);
        state.for_get = !state.for_get;
      })
      .addCase(add_reminder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delete_reminder.fulfilled, (state, action) => {
        state.reminders_arr = state.reminders_arr.filter(
          (reminder) => reminder.id !== Number(action.payload),
        );
        state.for_get = !state.for_get;
      })
      .addCase(delete_reminder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(update_reminder.fulfilled, (state, action) => {
        state.reminders_arr = state.reminders_arr.map((reminder) =>
          reminder.id === action.payload.id ? action.payload : reminder,
        );
      })
      .addCase(update_reminder.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default reminders_slice.reducer;
