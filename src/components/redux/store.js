import { configureStore } from "@reduxjs/toolkit";
import mealListReducer from "./slices/mealListSlice";
import calendarMealReducer from "./slices/calendarMealSlice";

export default configureStore({
  reducer: {
    mealList: mealListReducer,
    calendarMeals: calendarMealReducer,
  },
});
