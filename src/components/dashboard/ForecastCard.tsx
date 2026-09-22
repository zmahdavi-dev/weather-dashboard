import { useTranslation } from "react-i18next";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { formatNumber } from "../../utils/formatters";

type ForecastItem = {
  date: string;
  condition: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
};

type ForecastCardProps = {
  items: ForecastItem[];
};

export default function ForecastCard({ items }: ForecastCardProps) {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;

  return (
    <Card
      sx={{
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          p: 2,

          "&:last-child": {
            pb: 2,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          {t("forecast.title")}
        </Typography>

        <Stack spacing={1.5}>
          {items.map((item, index) => (
            <Box key={item.date}>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {item.date}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "text.secondary",
                      mt: 0.25,
                    }}
                  >
                    {item.condition}
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src={item.icon}
                  alt={item.condition}
                  sx={{
                    width: 34,
                    height: 34,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {formatNumber(Math.round(item.maxTemp), language)}° /{" "}
                  {formatNumber(Math.round(item.minTemp), language)}°
                </Typography>
              </Stack>

              {index < items.length - 1 && (
                <Divider sx={{ mt: 1.5 }} />
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}