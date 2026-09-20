export type WeatherCondition = {
  text: string;
  icon: string;
  code: number;
};

export type WeatherLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
};

export type CurrentWeather = {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;

  condition: WeatherCondition;

  wind_kph: number;
  humidity: number;
  precip_mm: number;
  feelslike_c: number;
};

export type CurrentWeatherResponse = {
  location: WeatherLocation;
  current: CurrentWeather;
};

export type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: WeatherCondition;
    daily_chance_of_rain: number;
  };
};

export type ForecastWeatherResponse = {
  location: WeatherLocation;
  current: CurrentWeather;
  forecast: {
    forecastday: ForecastDay[];
  };
};