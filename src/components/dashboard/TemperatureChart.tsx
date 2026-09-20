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

const temperatureData = [
  { time: "۶ صبح", temp: 10 },
  { time: "۹ صبح", temp: 14 },
  { time: "۱۲ ظهر", temp: 18 },
  { time: "۳ عصر", temp: 22 },
  { time: "۶ عصر", temp: 19 },
  { time: "۹ شب", temp: 14 },
  { time: "۱۲ شب", temp: 12 },
  { time: "۳ صبح", temp: 10 },
];

export default function TemperatureChart() {
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
        {/* Tabs */}
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
            امروز
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "text.secondary",
            }}
          >
            هفته
          </Typography>
        </Stack>

        {/* Chart */}
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
                left: 10,
                bottom: 0,
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
                tick={{
                  fontSize: 9,
                  fill: "#7D8192",
                }}
              />

              <YAxis hide domain={["dataMin - 4", "dataMax + 4"]} />

              <Tooltip
                formatter={(value) => [`${value}°`, "دما"]}
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
                  formatter={(value) => `${value}°`}
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
