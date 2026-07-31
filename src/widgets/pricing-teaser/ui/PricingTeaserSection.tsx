"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { PricingPlanCards, pricingTeaserDescription } from "@/entities/pricing";
import { authLink } from "@/shared/config";
import { GradientButton, OutlinedPillButton, SectionHeading } from "@/shared/ui";

export function PricingTeaserSection() {
  return (
    <Box id="pricing-teaser" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading title="Тарифы" description={pricingTeaserDescription} />
        <Box sx={{ mb: 3 }}>
          <PricingPlanCards showCardCta={false} />
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "center" }}>
          <GradientButton component={NextLink} href="/pricing">
            Подробнее о тарифах
          </GradientButton>
          <OutlinedPillButton href={authLink.href}>Войти</OutlinedPillButton>
        </Stack>
      </Container>
    </Box>
  );
}
