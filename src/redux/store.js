import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";

//Створюємо redux store
export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
