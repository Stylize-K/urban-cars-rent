import { createSlice } from "@reduxjs/toolkit";

//Початкове значення стейту у favoriteSlice
const initialState = {
  items: [],
};

//Створюємо favoriteSlice
export const favoritesCarsSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const newFavoriteCar = action.payload;
      state.items.push(newFavoriteCar);
    },
    removeFromFavorites: (state, action) => {
      const carToRemove = action.payload;
      state.items = state.items.filter((car) => car.id !== carToRemove.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  favoritesCarsSlice.actions;

export const favoritesCarsReducer = favoritesCarsSlice.reducer; // Експортуємо favoritesCarsReducer у зовнішній код
