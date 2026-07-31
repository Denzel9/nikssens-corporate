"use client";

import Button, { type ButtonProps } from "@mui/material/Button";

export function OutlinedPillButton({ sx, ...props }: ButtonProps) {
  return (
    <Button
      variant="outlined"
      {...props}
      sx={[
        {
          borderColor: "rgba(255, 255, 255, 0.35)",
          color: "text.primary",
          px: { xs: 2.5, md: 3 },
          py: 1,
          fontSize: 14,
          fontWeight: 600,
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.7)",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
}
