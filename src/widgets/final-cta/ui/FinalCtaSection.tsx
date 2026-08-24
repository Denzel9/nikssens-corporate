"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { authLink } from "@/shared/config";
import { GradientButton, OutlinedPillButton } from "@/shared/ui";

export function FinalCtaSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "24px",
            bgcolor: "background.paper",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ justifyContent: "space-between", alignItems: { md: "center" } }}
          >
            <Box sx={{ maxWidth: 520 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" }, mb: 1.5 }}
              >
                Готовы сотрудничать в едином контуре?
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 16, lineHeight: 1.7, mb: 3 }}>
                Войдите, чтобы публиковать объявления, принимать отклики и вести задачи.
                С Prime — мультиаккаунт и мультизадачи для команд и агентств. Или напишите
                нам — поможем с онбордингом.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ flexWrap: "wrap" }}>
                <GradientButton href={authLink.href}>
                  Войти
                </GradientButton>
                {/* <DemoModalTrigger label="2 минуты о продукте" /> */}
                <OutlinedPillButton component={NextLink} href="/contacts">
                  Связаться
                </OutlinedPillButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
