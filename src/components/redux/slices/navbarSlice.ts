import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "page",
  initialState: "recipeList",
  reducers: {
    setPage: (state, { payload }: PayloadAction<{ page: string }>) => {
      return payload.page;
    },
  },
});

export const { setPage } = navbarSlice.actions;

export default navbarSlice.reducer;
