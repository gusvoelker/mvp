import { createSlice } from "@reduxjs/toolkit";

export const mealListSlice = createSlice({
  name: "userMeals",
  initialState: [],
  reducers: {
    addUserMeals: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { addUserMeal, addUserMeals } = mealListSlice.actions;

export default mealListSlice.reducer;
