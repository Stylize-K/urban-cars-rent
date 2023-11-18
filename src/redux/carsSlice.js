import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

//Початкове значення стейту у contactSlice
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
//Винесемо логіку редюсерів, які обробляють pending та rejected екшени у функції, для оптимізацї коду
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//Створюємо carsSlice
export const carsSlice = createSlice({
  name: "cars",
  initialState,
  //Асинхроні редюсери (extraReducers). Властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів, тобто тих, які не згенеровані з властивості reducers. Оскільки ці редюсери обробляють «зовнішні» екшени, для них не буде створено генератори екшенів в slice.actions, в цьому немає необхідності.
  extraReducers: {
    //Fetch cars
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const carsReducer = carsSlice.reducer; // Експортуємо filterReducer у зовнішній код
