import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../../../types/Index";

interface Meals {
  date: string;
  meal: Meal;
}

interface State {
  calendarMeals: Meals[];
  selectedDay: string | null;
}

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendarMeals: [],
    selectedDay: null,
  } as State,
  reducers: {
    addCalendarMeals: (state, action: PayloadAction<{ CMeals: Meals[] }>) => {
      return {
        ...state,
        calendarMeals: [...state.calendarMeals, ...action.payload.CMeals],
      };
    },
    removeCalendarMeal: (state, action) => {
      let newMeals = state.calendarMeals.filter(
        (meal) => meal.date !== action.payload.date
      );
      return {
        ...state,
        calendarMeals: newMeals,
      };
    },
    selectDay: (state, action) => {
      return {
        ...state,
        selectedDay: action.payload.date,
      };
    },
  },
});

export const { addCalendarMeals, removeCalendarMeal, selectDay } =
  calendarSlice.actions;

export default calendarSlice.reducer;
