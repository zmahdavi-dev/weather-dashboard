import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const rainItems = [
  { time: "۹ صبح", value: 35 },
  { time: "۱۲ ظهر", value: 70 },
  { time: "۳ عصر", value: 45 },
  { time: "۶ عصر", value: 90 },
  { time: "۹ شب", value: 50 },
  { time: "۱۲ شب", value: 20 },
];

export default function RainChanceCard() {
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
          احتمال بارش
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