import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//TODO: define meal structure
interface Meal {
  id: string;
  mealName: string;
  description: string;
  recipeLink: string;
  rating: number;
  cost: number;
  difficulty: number;
}
const userMeals: Meal[] = [];

export const mealListSlice = createSlice({
  name: "userMeals",
  initialState: userMeals,
  reducers: {
    addUserMeals: (state, { payload }: PayloadAction<Meal[]>) => {
      return [...state, ...payload];
    },
    deleteUserMeal: (state, { payload }: PayloadAction<{ id: string }>) => {
      return state.filter((meal) => meal.id !== payload.id);
    },
  },
});

export const { addUserMeals, deleteUserMeal } = mealListSlice.actions;

export default mealListSlice.reducer;
