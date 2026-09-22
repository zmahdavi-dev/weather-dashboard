import { useTranslation } from "react-i18next";

import { AddRounded } from "@mui/icons-material";

import {
  Card,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function AddCityCard() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        height: 260,
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
          px: 2,
          textAlign: "center",
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
          {t("addCity.title")}
        </Typography>

        <Typography
          sx={{
            fontSize: 11,
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          {t("addCity.description")}
        </Typography>
      </Stack>
    </Card>
  );
}