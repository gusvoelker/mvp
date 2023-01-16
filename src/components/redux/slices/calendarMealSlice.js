import { createSlice } from "@reduxjs/toolkit";

export const calendarMealSlice = createSlice({
  name: "calendarMeals",
  initialState: [],
  reducers: {
    addCalendarMeals: (state, action) => {
      return [...state, ...action.payload.calendarMeals];
    },
  },
});

export const { addCalendarMeals } = calendarMealSlice.actions;

export default calendarMealSlice.reducer;
