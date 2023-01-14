import { configureStore } from "@reduxjs/toolkit";
import mealListReducer from "./slices/mealListSlice";

export default configureStore({
  reducer: {
    mealList: mealListReducer,
  },
});
