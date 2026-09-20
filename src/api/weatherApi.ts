import axios from "axios";

import type {
  CurrentWeatherResponse,
  ForecastWeatherResponse,
} from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const weatherApi = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
});

export async function getCurrentWeather(
  city: string,
): Promise<CurrentWeatherResponse> {
  const response = await weatherApi.get<CurrentWeatherResponse>(
    "/current.json",
    {
      params: {
        key: API_KEY,
        q: city,
        lang: "fa",
      },
    },
  );

  return response.data;
}

export async function getWeatherForecast(
  city: string,
  days = 3,
): Promise<ForecastWeatherResponse> {
  const response = await weatherApi.get<ForecastWeatherResponse>(
    "/forecast.json",
    {
      params: {
        key: API_KEY,
        q: city,
        days,
        lang: "fa",
      },
    },
  );

  return response.data;
}