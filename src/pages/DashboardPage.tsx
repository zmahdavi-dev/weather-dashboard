import {
  AirOutlined,
  OpacityOutlined,
  WaterDropOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

import { Box, Grid, Typography } from "@mui/material";

import AddCityCard from "../components/dashboard/AddCityCard";
import CurrentWeatherCard from "../components/dashboard/CurrentWeatherCard";
import ForecastCard from "../components/dashboard/ForecastCard";
import HighlightCard from "../components/dashboard/HighlightCard";
import RainChanceCard from "../components/dashboard/RainChanceCard";
import TemperatureChart from "../components/dashboard/TemperatureChart";

export default function DashboardPage() {
  return (
    <Box>
      {/* ردیف اول */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5 }}>
          <CurrentWeatherCard />
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
              value="۶۵٪"
              description="وضعیت نرمال"
              icon={<OpacityOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="سرعت باد"
              value="۱۲ km/h"
              description="باد ملایم"
              icon={<AirOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="میزان بارش"
              value="۲.۴ mm"
              description="بارش کم"
              icon={<WaterDropOutlined />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HighlightCard
              title="طلوع خورشید"
              value="۶:۰۳"
              description="غروب ۱۸:۲۱"
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
            <ForecastCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
