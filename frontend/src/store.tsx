import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import notes_slice from './features/tab_notes/notes_slice';

const store = configureStore ({
    reducer: {
        note: notes_slice,
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;