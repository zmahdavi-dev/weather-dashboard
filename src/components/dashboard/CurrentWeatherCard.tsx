import { useTranslation } from "react-i18next";

import { Box, Card, CardContent, Typography } from "@mui/material";

import tehranImage from "../../assets/tehran.jpg";
import { formatNumber } from "../../utils/formatters";

type CurrentWeatherCardProps = {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  localtime: string;
};

export default function CurrentWeatherCard({
  city,
  country,
  temperature,
  feelsLike,
  condition,
  localtime,
}: CurrentWeatherCardProps) {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;

  return (
    <Card
      sx={{
        height: 260,
        overflow: "hidden",
        position: "relative",
        color: "#fff",
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(20, 24, 70, 0.6),
            rgba(20, 24, 70, 0.15)
          ),
          url(${tehranImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          "&:last-child": {
            pb: 2.5,
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {city}، {country}
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              mt: 0.5,
              opacity: 0.85,
            }}
          >
            {localtime}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: 44,
              lineHeight: 1,
              fontWeight: 600,
            }}
          >
            {formatNumber(Math.round(temperature), language)}°
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              mt: 1,
            }}
          >
            {condition}
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              mt: 0.5,
              opacity: 0.85,
            }}
          >
            {t("currentWeather.feelsLike")}{" "}
            {formatNumber(Math.round(feelsLike), language)}°
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}