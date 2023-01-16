import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendarMeals: [],
    selectedDay: null,
  },
  reducers: {
    addCalendarMeals: (state, action) => {
      return {
        ...state,
        calendarMeals: [
          ...state.calendarMeals,
          ...action.payload.calendarMeals,
        ],
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
