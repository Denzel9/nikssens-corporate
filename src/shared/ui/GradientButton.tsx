"use client";

import Button, { type ButtonProps } from "@mui/material/Button";

export function GradientButton({ sx, ...props }: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
      sx={{
        bgcolor: "primary.main",
        color: "#FFFFFF",
        backgroundImage: "none",
        px: { xs: 3, md: 4 },
        py: { xs: 1.25, md: 1 },
        fontSize: { xs: 15, md: 16 },
        fontWeight: 700,
        boxShadow: "none",
        transition: "background-color 0.2s ease",
        "&:hover": {
          bgcolor: "rgb(90, 162, 160)",
          color: "#FFFFFF",
          backgroundImage: "none",
          boxShadow: "none",
          filter: "none",
        },
        "&.Mui-disabled": {
          bgcolor: "rgba(77, 144, 142, 0.35)",
          color: "rgba(255,255,255,0.7)",
        },
        ...sx,
      }}
    />
  );
}
