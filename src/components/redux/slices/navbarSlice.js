import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "page",
  initialState: "test",
  reducers: {
    setPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPage } = navbarSlice.actions;

export default navbarSlice.reducer;
