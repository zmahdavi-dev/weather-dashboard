import { useTranslation } from "react-i18next";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

export default function RainChanceCard() {
  const { t } = useTranslation();

  const rainItems = [
    { time: t("rainChance.morning9"), value: 35 },
    { time: t("rainChance.noon12"), value: 70 },
    { time: t("rainChance.afternoon3"), value: 45 },
    { time: t("rainChance.afternoon6"), value: 90 },
    { time: t("rainChance.night9"), value: 50 },
    { time: t("rainChance.night12"), value: 20 },
  ];

  return (
    <Card
      sx={{
        height: 260,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          p: 2.5,
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 600,
            mb: 2,
          }}
        >
          {t("rainChance.title")}
        </Typography>

        <Stack spacing={1.4}>
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
                  flexShrink: 0,
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

              <Typography
                sx={{
                  width: 32,
                  fontSize: 10,
                  color: "text.secondary",
                  textAlign: "left",
                }}
              >
                {item.value}٪
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}