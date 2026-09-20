import type { ReactNode } from "react";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

type HighlightCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  description?: string;
};

export default function HighlightCard({
  title,
  value,
  icon,
  description,
}: HighlightCardProps) {
  return (
    <Card
      sx={{
        height: 100,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          p: 1.5,

          "&:last-child": {
            pb: 1.5,
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                color: "text.secondary",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 18,
                fontWeight: 600,
                color: "text.primary",
                lineHeight: 1.3,
              }}
            >
              {value}
            </Typography>

            {description && (
              <Typography
                sx={{
                  mt: 0.25,
                  fontSize: 10,
                  color: "text.secondary",
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              bgcolor: "primary.light",
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              "& svg": {
                fontSize: 18,
              },
            }}
          >
            {icon}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}