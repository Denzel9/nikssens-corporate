"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { pricingPlans, type PricingPlan } from "@/entities/pricing";
import { GradientButton, OutlinedPillButton } from "@/shared/ui";

type PricingPlanCardsProps = {
  /** Показывать CTA на каждой карточке (страница тарифов). */
  showCardCta?: boolean;
  plans?: PricingPlan[];
};

export function PricingPlanCards({
  showCardCta = true,
  plans = pricingPlans,
}: PricingPlanCardsProps) {
  return (
    <Grid container spacing={2.5} sx={{ justifyContent: "center" }}>
      {plans.map((plan) => (
        <Grid key={plan.name} size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              gap: 2.5,
              height: "100%",
              display: "flex",
              border: "1px solid",
              borderRadius: "32px",
              color: "text.primary",
              p: { xs: 3, md: 3.5 },
              flexDirection: "column",
              bgcolor: plan.highlighted ? "primary.main" : "background.paper",
              borderColor: plan.highlighted ? "primary.main" : "rgba(255,255,255,0.08)",
            }}
          >
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700, fontSize: 22 }}>{plan.name}</Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: 28, md: 32 },
                }}
              >
                {plan.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: plan.highlighted ? "text.primary" : "text.secondary",
                }}
              >
                {plan.description}
              </Typography>
            </Stack>

            <Stack spacing={1.25} sx={{ flex: 1 }}>
              {plan.features.map((feature) => (
                <Stack
                  spacing={1}
                  key={feature}
                  direction="row"
                  sx={{ alignItems: "flex-start" }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 20, mt: 0.2 }} />
                  <Typography sx={{ fontSize: 15, lineHeight: 1.5 }}>{feature}</Typography>
                </Stack>
              ))}
            </Stack>

            {showCardCta &&
              (plan.highlighted ? (
                <GradientButton
                  href={plan.href}
                  sx={{
                    color: "#FFFFFF",
                    bgcolor: "#1A1A1A",
                    backgroundImage: "none",
                    backgroundColor: "#1A1A1A",
                    "&:hover": {
                      filter: "none",
                      color: "#FFFFFF",
                      boxShadow: "none",
                      bgcolor: "#242424",
                      backgroundImage: "none",
                      backgroundColor: "#242424",
                    },
                  }}
                >
                  {plan.cta}
                </GradientButton>
              ) : (
                <OutlinedPillButton href={plan.href}>{plan.cta}</OutlinedPillButton>
              ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
