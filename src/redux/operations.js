import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Базовий URL для всіх запитів з Axios.
axios.defaults.baseURL = "https://6558e9a4e93ca47020a9e0e0.mockapi.io/adverts";

//Створюємо асинхроний thunk для отримання списку контактів з бекенду
export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
