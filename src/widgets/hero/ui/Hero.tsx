"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { authLink, brand } from "@/shared/config";
import { DemoModalTrigger, GradientButton } from "@/shared/ui";

export function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 8 },
        animation: "heroFadeIn 0.8s ease-out both",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={{ xs: 3, md: 4 }}
          sx={{
            mt: { xs: 4, md: 10 },
            alignItems: { xs: "flex-start", md: "center" },
            textAlign: { xs: "left", md: "center" },
            maxWidth: 920,
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3.25rem", md: "4.25rem" },
              maxWidth: 900,
            }}
          >
            Бренды и исполнители — от брифа до публикации
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              maxWidth: 680,
            }}
          >
            {brand.tagline}. {brand.productOneLiner}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <GradientButton
              href={authLink.href}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Войти
            </GradientButton>
            <DemoModalTrigger fullWidth />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
