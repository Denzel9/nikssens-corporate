"use client";

import Box from "@mui/material/Box";
import { CookieConsentBanner } from "@/widgets/cookie-consent";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
      <CookieConsentBanner />
    </Box>
  );
}
