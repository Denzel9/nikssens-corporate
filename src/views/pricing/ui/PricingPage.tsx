"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  PricingPlanCards,
  pricingFootnote,
  pricingPageDescription,
} from "@/entities/pricing";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

export function PricingPage() {
  return (
    <PageShell>
      <PageHero title="Тарифы" description={pricingPageDescription} />
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <PricingPlanCards />

        <Typography
          sx={{
            mt: 4,
            mx: "auto",
            fontSize: 14,
            maxWidth: 720,
            lineHeight: 1.7,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          {pricingFootnote}
        </Typography>
      </Container>
    </PageShell>
  );
}
