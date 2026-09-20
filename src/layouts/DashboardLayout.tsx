import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            p: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}