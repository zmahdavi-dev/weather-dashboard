import {
  CloudOutlined,
  WbSunnyOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";

import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const forecastItems = [
  {
    day: "امروز",
    condition: "آفتابی",
    min: "۱۸°",
    max: "۲۸°",
    icon: <WbSunnyOutlined />,
  },
  {
    day: "فردا",
    condition: "نیمه ابری",
    min: "۱۷°",
    max: "۲۵°",
    icon: <CloudOutlined />,
  },
  {
    day: "دوشنبه",
    condition: "بارانی",
    min: "۱۵°",
    max: "۲۲°",
    icon: <WaterDropOutlined />,
  },
];

export default function ForecastCard() {
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
          p: 2.5,
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            mb: 2,
          }}
        >
          پیش‌بینی ۳ روز آینده
        </Typography>

        <Stack>
          {forecastItems.map((item, index) => (
            <Stack key={item.day}>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.25}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </Typography>

                  <Stack>
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {item.day}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 11,
                        color: "text.secondary",
                      }}
                    >
                      {item.condition}
                    </Typography>
                  </Stack>
                </Stack>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {item.max} / {item.min}
                </Typography>
              </Stack>

              {index < forecastItems.length - 1 && <Divider />}
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
