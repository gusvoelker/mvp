import { configureStore } from "@reduxjs/toolkit";
import mealListReducer from "./slices/mealListSlice";
import calendarReducer from "./slices/calendarSlice";
import navbarReducer from "./slices/navbarSlice";

const store = configureStore({
  reducer: {
    mealList: mealListReducer,
    calendar: calendarReducer,
    navbar: navbarReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
