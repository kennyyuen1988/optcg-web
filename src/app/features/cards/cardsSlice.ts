// src/features/cards/cardsSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

// Define a type for the slice state
interface CardsState {
  entities: any[];
  loading: 'idle' | 'loading' | 'failed';
}

// Define the initial state
const initialState: CardsState = {
  entities: [],
  loading: 'idle',
};

// Define our async thunk
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get(
    'https://optcgbackend.onrender.com/api/data',
  );
  return response.data;
});

// Define the slice
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = 'idle';
        state.entities = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export default cardsSlice.reducer;
