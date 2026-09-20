import {
  CloudOutlined,
  LocationOnOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import tehranImage from "../../assets/tehran.jpg";

export default function CurrentWeatherCard() {
  return (
    <Card
      sx={{
        height: 260,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(20, 24, 70, 0.52),
            rgba(20, 24, 70, 0.12)
          ),
          url(${tehranImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          p: 3,
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <WbSunnyOutlined
                sx={{
                  fontSize: 44,
                  color: "#FFE47A",
                }}
              />

              <Typography
                sx={{
                  fontSize: 44,
                  fontWeight: 500,
                  lineHeight: 1,
                  color: "#fff",
                }}
              >
                ۲۶°
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: 1.25,
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.95)",
              }}
            >
              نیمه ابری
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 12,
                color: "rgba(255,255,255,0.78)",
              }}
            >
              احساس واقعی ۲۸°
            </Typography>
          </Box>

          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 500,
                color: "#fff",
              }}
            >
              دوشنبه، ۷:۴۳ صبح
            </Typography>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                mt: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <LocationOnOutlined
                sx={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.82)",
                }}
              />

              <Typography
                sx={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                تهران، ایران
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <CloudOutlined
          sx={{
            position: "absolute",
            left: 24,
            bottom: 18,
            fontSize: 88,
            color: "rgba(255,255,255,0.18)",
          }}
        />
      </CardContent>
    </Card>
  );
}