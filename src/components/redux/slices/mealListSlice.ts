import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../../../types/Index";
const userMeals: Meal[] = [];

export const mealListSlice = createSlice({
  name: "userMeals",
  initialState: userMeals,
  reducers: {
    addUserMeals: (state, { payload }: PayloadAction<Meal[]>) => {
      return [...payload];
    },
    deleteUserMeal: (state, { payload }: PayloadAction<{ id: string }>) => {
      return state.filter((meal) => meal.id !== payload.id);
    },
  },
});

export const { addUserMeals, deleteUserMeal } = mealListSlice.actions;

export default mealListSlice.reducer;
