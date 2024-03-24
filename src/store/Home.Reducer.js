import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: true,
    gameHistory: [],
  },
  reducers: {
    gameSuccess(state, action) {
      state.gameHistory.push(action.payload);
    },
  },
});

export const {gameSuccess} = homeSlice.actions;

export default homeSlice.reducer;
