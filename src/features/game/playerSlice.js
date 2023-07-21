import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRandomQuote } from './playerAPI';

const initialState = {
  quote : "",
  status: 'idle',

};

export const getRandomQuoteAsync = createAsyncThunk(
  'player/getRandomQuote',
  async () => {
    const response = await getRandomQuote();
  
    return response.data;
  }
);


export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    increment: (state) => {
      state.loggedInUser += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomQuoteAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRandomQuoteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.quote += action.payload.content;
      })
      .addCase(getRandomQuoteAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.console.error= action.error;
      });
  },
});

export const selectQuote=(state)=>state.player.quote;
export const { increment} = playerSlice.actions;
export default playerSlice.reducer;

