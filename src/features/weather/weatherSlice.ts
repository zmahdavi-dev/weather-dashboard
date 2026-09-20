import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getCurrentWeather,
  getWeatherForecast,
} from "../../api/weatherApi";

import type {
  CurrentWeatherResponse,
  ForecastWeatherResponse,
} from "../../types/weather";

type WeatherState = {
  current: CurrentWeatherResponse | null;
  forecast: ForecastWeatherResponse | null;
  loading: boolean;
  error: string | null;
};

const initialState: WeatherState = {
  current: null,
  forecast: null,
  loading: false,
  error: null,
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrentWeather",
  async (city: string) => {
    return await getCurrentWeather(city);
  },
);

export const fetchWeatherForecast = createAsyncThunk(
  "weather/fetchWeatherForecast",
  async (city: string) => {
    return await getWeatherForecast(city, 3);
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Current weather
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })

      .addCase(fetchCurrentWeather.rejected, (state) => {
        state.loading = false;
        state.error = "دریافت اطلاعات آب‌وهوا با خطا مواجه شد.";
      })

      // Forecast
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.forecast = action.payload;
      })

      .addCase(fetchWeatherForecast.rejected, (state) => {
        state.loading = false;
        state.error = "دریافت پیش‌بینی آب‌وهوا با خطا مواجه شد.";
      });
  },
});

export default weatherSlice.reducer;