import { configureStore } from "@reduxjs/toolkit";
import mealListReducer from "./slices/mealListSlice";
import calendarReducer from "./slices/calendarSlice";
import navbarReducer from "./slices/navbarSlice";

export default configureStore({
  reducer: {
    mealList: mealListReducer,
    calendar: calendarReducer,
    navbar: navbarReducer,
  },
});
