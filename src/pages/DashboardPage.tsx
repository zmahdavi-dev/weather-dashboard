import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  AirOutlined,
  OpacityOutlined,
  WaterDropOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

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

import {
  formatForecastDate,
  formatLocalTime,
  formatNumber,
} from "../utils/formatters";

export default function DashboardPage() {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const { current, forecast, loading, error } = useAppSelector(
    (state) => state.weather,
  );

  const language = i18n.resolvedLanguage ?? i18n.language;

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
            city={t(`locations.${current?.location.name}`, {
              defaultValue: current?.location.name ?? "Tehran",
            })}
            country={t(`locations.${current?.location.country}`, {
              defaultValue: current?.location.country ?? "",
            })}
            temperature={current?.current.temp_c ?? 0}
            feelsLike={current?.current.feelslike_c ?? 0}
            condition={t(
              `weatherConditions.${current?.current.condition.text}`,
              {
                defaultValue:
                  current?.current.condition.text ?? "",
              },
            )}
            localtime={formatLocalTime(
              current?.location.localtime ?? "",
              language,
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <AddCityCard />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <RainChanceCard />
        </Grid>
      </Grid>

      {/* ردیف دوم */}
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            mb: 2,
          }}
        >
          {t("dashboard.todayStatus")}
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title={t("dashboard.humidity")}
              value={`${formatNumber(
                current?.current.humidity ?? 0,
                language,
              )}٪`}
              description={t("dashboard.currentHumidity")}
              icon={<OpacityOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title={t("dashboard.windSpeed")}
              value={`${formatNumber(
                current?.current.wind_kph ?? 0,
                language,
              )} ${t("units.kmh")}`}
              description={t("dashboard.currentWind")}
              icon={<AirOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title={t("dashboard.precipitation")}
              value={`${formatNumber(
                current?.current.precip_mm ?? 0,
                language,
              )} ${t("units.mm")}`}
              description={t("dashboard.currentPrecipitation")}
              icon={<WaterDropOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title={t("dashboard.feelsLike")}
              value={`${formatNumber(
                current?.current.feelslike_c ?? 0,
                language,
              )}°`}
              description={t("dashboard.realFeel")}
              icon={<WbSunnyOutlined />}
            />
          </Grid>
        </Grid>
      </Box>

      {/* ردیف سوم */}
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TemperatureChart />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <ForecastCard
              items={
                forecast?.forecast.forecastday.map((day) => ({
                  date: formatForecastDate(
                    day.date,
                    language,
                  ),

                  condition: t(
                    `weatherConditions.${day.day.condition.text}`,
                    {
                      defaultValue: day.day.condition.text,
                    },
                  ),

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