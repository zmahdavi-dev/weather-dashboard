import { useEffect } from "react";

import {
  AirOutlined,
  OpacityOutlined,
  WaterDropOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";

import AddCityCard from "../components/dashboard/AddCityCard";
import CurrentWeatherCard from "../components/dashboard/CurrentWeatherCard";
import ForecastCard from "../components/dashboard/ForecastCard";
import HighlightCard from "../components/dashboard/HighlightCard";
import RainChanceCard from "../components/dashboard/RainChanceCard";
import TemperatureChart from "../components/dashboard/TemperatureChart";

import {
  fetchCurrentWeather,
  fetchWeatherForecast,
} from "../features/weather/weatherSlice";

import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function DashboardPage() {
  const dispatch = useAppDispatch();

  const { current, forecast, loading, error } = useAppSelector(
    (state) => state.weather,
  );

  useEffect(() => {
    dispatch(fetchCurrentWeather("Tehran"));
    dispatch(fetchWeatherForecast("Tehran"));
  }, [dispatch]);

  if (loading && !current) {
    return (
      <Box
        sx={{
          minHeight: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      {/* ردیف اول */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5 }}>
          <CurrentWeatherCard
            city={current?.location.name ?? "Tehran"}
            country={current?.location.country ?? ""}
            temperature={current?.current.temp_c ?? 0}
            feelsLike={current?.current.feelslike_c ?? 0}
            condition={current?.current.condition.text ?? ""}
            localtime={current?.location.localtime ?? ""}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <AddCityCard />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <RainChanceCard />
        </Grid>
      </Grid>

      {/* ردیف دوم - وضعیت امروز */}
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            mb: 2,
          }}
        >
          وضعیت امروز
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="رطوبت"
              value={`${current?.current.humidity ?? 0}٪`}
              description="رطوبت فعلی"
              icon={<OpacityOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="سرعت باد"
              value={`${current?.current.wind_kph ?? 0} km/h`}
              description="سرعت باد"
              icon={<AirOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="میزان بارش"
              value={`${current?.current.precip_mm ?? 0} mm`}
              description="بارش فعلی"
              icon={<WaterDropOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="دمای محسوس"
              value={`${current?.current.feelslike_c ?? 0}°`}
              description="احساس واقعی دما"
              icon={<WbSunnyOutlined />}
            />
          </Grid>
        </Grid>
      </Box>

      {/* ردیف سوم - نمودار و پیش‌بینی */}
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TemperatureChart />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <ForecastCard
              items={
                forecast?.forecast.forecastday.map((day) => ({
                  date: day.date,
                  condition: day.day.condition.text,
                  maxTemp: day.day.maxtemp_c,
                  minTemp: day.day.mintemp_c,
                  icon: `https:${day.day.condition.icon}`,
                })) ?? []
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
