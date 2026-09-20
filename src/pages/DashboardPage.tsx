import {
  AddRounded,
  CloudOutlined,
  LocationOnOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const rainItems = [
  { time: "۹ صبح", value: 35 },
  { time: "۱۲ ظهر", value: 70 },
  { time: "۳ عصر", value: 45 },
  { time: "۶ عصر", value: 90 },
  { time: "۹ شب", value: 50 },
  { time: "۱۲ شب", value: 20 },
];

export default function DashboardPage() {
  return (
    <Box>
      {/* Location label */}
      <Box sx={{ mb: 1.5 }}>
        <Typography
          sx={{
            fontSize: 12,
            color: "text.secondary",
          }}
        >
          موقعیت فعلی
        </Typography>

        <Stack
          direction="row"
          spacing={0.75}
          sx={{
            alignItems: "center",
            mt: 0.25,
          }}
        >
          <LocationOnOutlined
            sx={{
              fontSize: 18,
              color: "primary.main",
            }}
          />

          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            تهران، ایران
          </Typography>
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {/* Current Weather */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            sx={{
              height: 230,
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(135deg, #9EC5FF 0%, #D7E4F8 100%)",
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                p: 3,
                position: "relative",
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
                        fontSize: 42,
                        color: "#FFF2A8",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 42,
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
                      mt: 1.5,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    نیمه ابری
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    احساس واقعی ۲۸°
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#fff",
                    }}
                  >
                    دوشنبه، ۷:۴۳ صبح
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    کمی ابری
                  </Typography>
                </Box>
              </Stack>

              <CloudOutlined
                sx={{
                  position: "absolute",
                  left: 24,
                  bottom: 18,
                  fontSize: 92,
                  color: "rgba(255,255,255,0.22)",
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Add City */}
        <Grid size={{ xs: 12, md: 2 }}>
          <Card
            sx={{
              height: 230,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "none",
            }}
          >
            <Stack
              spacing={1.25}
              sx={{
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  width: 44,
                  height: 44,
                  bgcolor: "primary.light",
                  color: "primary.main",

                  "&:hover": {
                    bgcolor: "primary.light",
                  },
                }}
              >
                <AddRounded />
              </IconButton>

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                افزودن شهر
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "text.secondary",
                  textAlign: "center",
                  px: 1,
                }}
              >
                شهر دیگری را برای مشاهده آب‌وهوا اضافه کنید
              </Typography>
            </Stack>
          </Card>
        </Grid>

        {/* Chance of Rain */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            sx={{
              height: 230,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                احتمال بارش
              </Typography>

              <Stack spacing={1.45}>
                {rainItems.map((item) => (
                  <Stack
                    key={item.time}
                    direction="row"
                    spacing={1.5}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        width: 52,
                        fontSize: 11,
                        color: "text.secondary",
                      }}
                    >
                      {item.time}
                    </Typography>

                    <Box
                      sx={{
                        flex: 1,
                        height: 6,
                        bgcolor: "primary.light",
                        borderRadius: 999,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${item.value}%`,
                          height: "100%",
                          bgcolor:
                            item.value >= 80
                              ? "primary.dark"
                              : "primary.main",
                          borderRadius: 999,
                        }}
                      />
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "text.secondary",
                  }}
                >
                  آفتابی
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "text.secondary",
                  }}
                >
                  بارانی
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "text.secondary",
                  }}
                >
                  بارش شدید
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}