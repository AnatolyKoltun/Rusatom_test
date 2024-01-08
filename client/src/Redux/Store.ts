/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filesSlice from '../Features/Files/filesSlice';

const store = configureStore({
  reducer: {
    files: filesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
