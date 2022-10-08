import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "navigate",
  initialState: {
    count: 0,
    items: [],
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = contentSlice.actions;

export default contentSlice.reducer;
