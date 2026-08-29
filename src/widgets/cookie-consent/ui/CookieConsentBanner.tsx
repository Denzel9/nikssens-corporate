"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/** `all` — все cookie; `necessary` — только обязательные */
export type CookieConsentValue = "all" | "necessary";

const STORAGE_KEY = "nikssens-cookie-consent";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === "all" || value === "necessary") return value;
  return null;
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent()) return;

    setTimeout(() => {
      setVisible(true);
    }, 0);
  }, []);

  const saveConsent = (value: CookieConsentValue) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: (theme) => theme.zIndex.snackbar,
        position: "fixed",
        p: { xs: 1.5, sm: 2 },
        pointerEvents: "none",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          gap: 2,
          mx: "auto",
          display: "flex",
          maxWidth: 1100,
          pointerEvents: "auto",
          alignItems: { xs: "stretch", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          p: { xs: 2, sm: 2.25 },
          borderRadius: 3,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <Typography
          variant="body2"
          sx={{ flex: 1, lineHeight: 1.55, color: "text.secondary" }}
        >
          Мы используем обязательные cookie для авторизации и работы сервиса.
          Необязательные — для аналитики и улучшения продукта. Вы можете принять
          все или оставить только необходимые.{" "}
          <Link
            component={NextLink}
            href="/legal/cookie-policy"
            underline="hover"
            color="primary"
          >
            Политика cookie
          </Link>
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ flexShrink: 0 }}
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => saveConsent("necessary")}
            sx={{
              whiteSpace: "nowrap",
              borderColor: "rgba(255,255,255,0.24)",
              fontWeight: 600,
            }}
          >
            Только необходимые
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => saveConsent("all")}
            sx={{
              whiteSpace: "nowrap",
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            Принять все
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
