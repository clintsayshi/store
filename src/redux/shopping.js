import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  category: 0,
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory } = shoppingSlice.actions;

export default shoppingSlice.reducer;
