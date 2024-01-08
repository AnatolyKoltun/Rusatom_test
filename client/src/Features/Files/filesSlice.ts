import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './state';

import * as api from '../../Api';

const initialState: State = {
  file: {
    id: NaN,
    filename: '',
  },
  files: [],
  error: undefined,
};

export const loadFiles = createAsyncThunk('files/load', (fileName: string) =>
  api.fetchFiles(fileName)
);
export const getFile = createAsyncThunk('file/load', (id: number) =>
  api.fetchGetFile(id)
);

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFiles.fulfilled, (state, action) => {
        state.files = action.payload;
      })
      .addCase(loadFiles.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getFile.fulfilled, (state, action) => {
        state.file = action.payload;
      })
      .addCase(getFile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default filesSlice.reducer;
