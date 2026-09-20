import {
  AnalyticsOutlined,
  CalendarMonthOutlined,
  CloudOutlined,
  HomeOutlined,
  LocationOnOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { NavLink, useLocation } from "react-router-dom";

import { DRAWER_WIDTH } from "../constants/layout";
import { appColors } from "../theme";

const menuItems = [
  {
    title: "خانه",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "پیش‌بینی",
    path: "/forecast",
    icon: <CloudOutlined />,
  },
  {
    title: "موقعیت‌ها",
    path: "/cities",
    icon: <LocationOnOutlined />,
  },
  {
    title: "تحلیل‌ها",
    path: "/analytics",
    icon: <AnalyticsOutlined />,
  },
  {
    title: "تقویم",
    path: "/calendar",
    icon: <CalendarMonthOutlined />,
  },
  {
    title: "تنظیمات",
    path: "/settings",
    icon: <SettingsOutlined />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  const checkIsActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          backgroundColor: appColors.sidebar.background,
          color: appColors.sidebar.text,
          border: 0,
          px: 2,
          py: 3,
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          px: 1.5,
          mb: 7,
        }}
      >
        <CloudOutlined
          sx={{
            fontSize: 30,
            color: appColors.sidebar.text,
          }}
        />

        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          هواشناسی
        </Typography>
      </Box>

      {/* Navigation */}
      <List
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {menuItems.map((item) => {
          const isActive = checkIsActive(item.path);

          return (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              selected={isActive}
              sx={{
                minHeight: 48,
                borderRadius: 0,
                px: 2,

                color: isActive
                  ? appColors.sidebar.text
                  : appColors.sidebar.textMuted,

                transition:
                  "background-color 0.2s ease, color 0.2s ease",

                "&.Mui-selected": {
                  backgroundColor: appColors.sidebar.active,
                },

                "&.Mui-selected:hover": {
                  backgroundColor: appColors.sidebar.active,
                },

                "&:hover": {
                  backgroundColor: appColors.sidebar.hover,
                  color: appColors.sidebar.text,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 42,
                  color: "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.title}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: 14,
                      fontWeight: isActive ? 500 : 400,
                    },
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}