import { useTranslation } from "react-i18next";

import {
  NotificationsNoneOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

export default function Header() {
  const { t, i18n } = useTranslation();

  const isPersian = i18n.language.startsWith("fa");

  const handleLanguageChange = () => {
    i18n.changeLanguage(isPersian ? "en" : "fa");
  };

  return (
    <Box
      component="header"
      sx={{
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2.5,
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Search */}
      <TextField
        size="small"
        placeholder={t("header.searchPlaceholder")}
        sx={{
          width: 300,

          "& .MuiOutlinedInput-root": {
            height: 40,
            borderRadius: 1,
            bgcolor: "background.default",
            fontSize: 14,

            "& fieldset": {
              borderColor: "transparent",
            },

            "&:hover fieldset": {
              borderColor: "transparent",
            },

            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlined
                  sx={{
                    fontSize: 18,
                    color: "text.secondary",
                  }}
                />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* User actions */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
        }}
      >
        <IconButton
          size="small"
          onClick={handleLanguageChange}
          sx={{
            width: 40,
            height: 32,
            borderRadius: 1,
            fontSize: 11,
            fontWeight: 600,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {isPersian ? "EN" : "FA"}
        </IconButton>

        <IconButton size="small">
          <NotificationsNoneOutlined fontSize="small" />
        </IconButton>

        <IconButton size="small">
          <PersonOutlineOutlined fontSize="small" />
        </IconButton>

        <Avatar
          sx={{
            width: 28,
            height: 28,
            bgcolor: "primary.main",
            fontSize: 12,
          }}
        >
          ز
        </Avatar>
      </Stack>
    </Box>
  );
}