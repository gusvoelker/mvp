import { createSlice } from "@reduxjs/toolkit";

export const mealListSlice = createSlice({
  name: "userMeals",
  initialState: [],
  reducers: {
    addUserMeals: (state, action) => {
      return [...state, ...action.payload];
    },
    deleteUserMeal: (state, action) => {
      return state.filter((meal) => meal.id !== action.payload.id);
    },
  },
});

export const { addUserMeal, addUserMeals, deleteUserMeal } =
  mealListSlice.actions;

export default mealListSlice.reducer;
