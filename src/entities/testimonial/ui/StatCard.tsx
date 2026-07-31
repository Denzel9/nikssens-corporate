"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Stat } from "../model/types";

type StatCardProps = {
  stat: Stat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 3.5 },
        borderRadius: "32px",
        bgcolor: "background.paper",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 40, md: 48 },
          letterSpacing: "-0.03em",
          lineHeight: 1,
          mb: 1.5,
        }}
      >
        {stat.value}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.5 }}>
        {stat.label}
      </Typography>
    </Box>
  );
}
