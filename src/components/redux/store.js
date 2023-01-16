import { configureStore } from "@reduxjs/toolkit";
import mealListReducer from "./slices/mealListSlice";
import calendarReducer from "./slices/calendarSlice";

export default configureStore({
  reducer: {
    mealList: mealListReducer,
    calendar: calendarReducer,
  },
});
