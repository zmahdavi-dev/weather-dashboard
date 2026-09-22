import { useTranslation } from "react-i18next";

import {
  Area,
  AreaChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import { formatNumber } from "../../utils/formatters";

export default function TemperatureChart() {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;

  const temperatureData = [
    { time: t("chart.morning6"), temp: 10 },
    { time: t("chart.morning9"), temp: 14 },
    { time: t("chart.noon12"), temp: 18 },
    { time: t("chart.afternoon3"), temp: 22 },
    { time: t("chart.afternoon6"), temp: 19 },
    { time: t("chart.night9"), temp: 14 },
    { time: t("chart.night12"), temp: 12 },
    { time: t("chart.morning3"), temp: 10 },
  ];

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
          height: "100%",
          p: 1.5,

          "&:last-child": {
            pb: 1.5,
          },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            {t("chart.today")}
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "text.secondary",
            }}
          >
            {t("chart.week")}
          </Typography>
        </Stack>

        <Box
          sx={{
            width: "100%",
            height: 175,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={temperatureData}
              margin={{
                top: 25,
                right: 10,
                left: 20,
                bottom: 10,
              }}
            >
              <defs>
                <linearGradient
                  id="temperatureArea"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#8F84E8" stopOpacity={0.18} />

                  <stop offset="100%" stopColor="#8F84E8" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                interval={0}
                padding={{
                  left: 10,
                  right: 10,
                }}
                tick={{
                  fontSize: 9,
                  fill: "#7D8192",
                }}
              />

              <YAxis hide domain={["dataMin - 4", "dataMax + 4"]} />

              <Tooltip
                formatter={(value) => [
                  `${formatNumber(Number(value), language)}°`,
                  t("chart.temperature"),
                ]}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E8E9F1",
                  fontFamily: "Vazirmatn",
                  fontSize: 11,
                }}
              />

              <Area
                type="monotone"
                dataKey="temp"
                stroke="#8F84E8"
                strokeWidth={1.8}
                fill="url(#temperatureArea)"
                dot={{
                  r: 2.5,
                  fill: "#FFFFFF",
                  stroke: "#8F84E8",
                  strokeWidth: 1.5,
                }}
                activeDot={{
                  r: 4,
                }}
              >
                <LabelList
                  dataKey="temp"
                  position="top"
                  formatter={(value) =>
                    `${formatNumber(Number(value), language)}°`
                  }
                  style={{
                    fontSize: 9,
                    fill: "#181A2A",
                  }}
                />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
