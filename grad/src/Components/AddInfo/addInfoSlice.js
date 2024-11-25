// src/features/dropListsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDropLists = createAsyncThunk(
  'dropLists/fetchDropLists',
  async () => {
    const response = await axios.get('https://localhost:44377/api/Admin/GetDropListsDetails');
    return response.data;
  }
);

const dropListsSlice = createSlice({
  name: 'dropLists',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDropLists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDropLists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDropLists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default dropListsSlice.reducer;
