"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  pricingPlansByAudience,
  type PricingAudience,
  type PricingPlan,
} from "@/entities/pricing";
import { GradientButton, OutlinedPillButton } from "@/shared/ui";
import { Chip } from "@mui/material";

type PricingPlanCardsProps = {
  /** Показывать CTA на каждой карточке (страница тарифов). */
  showCardCta?: boolean;
  defaultAudience?: PricingAudience;
};

const AUDIENCE_OPTIONS: { value: PricingAudience; label: string }[] = [
  { value: "personal", label: "Персональный" },
  { value: "corporate", label: "Корпоративный" },
];

function PlanCard({ plan, showCardCta }: { plan: PricingPlan; showCardCta: boolean }) {
  return (
    <Box
      sx={{
        gap: 2.5,
        width: { xs: '100%', md: 400 },
        minWidth: { xs: '100%', md: 400 },
        height: 550,
        display: "flex",
        border: "1px solid",
        borderRadius: "24px",
        color: "text.primary",
        p: { xs: 3, md: 3.5 },
        flexDirection: "column",
        bgcolor: plan.highlighted ? "primary.main" : "background.paper",
        borderColor: plan.highlighted ? "primary.main" : "rgba(255, 255, 255, 0.12)",
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
          <Stack spacing={1} key={feature} direction="row" sx={{ alignItems: "flex-start" }}>
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
  );
}

export function PricingPlanCards({
  showCardCta = true,
  defaultAudience = "personal",
}: PricingPlanCardsProps) {
  const [audience, setAudience] = useState<PricingAudience>(defaultAudience);
  const plans = pricingPlansByAudience[audience];
  const isCorporate = audience === "corporate";

  return (
    <Stack spacing={3} sx={{ alignItems: 'center' }}>
      <Box
        role="tablist"
        aria-label="Тип тарифа"
        sx={{
          mx: "auto",
          display: "inline-flex",
          p: 0.5,
          gap: 0.5,
          width: 'fit-content',
          borderRadius: "999px",
          border: "1px solid",
          borderColor: "rgba(255,255,255,0.12)",
          bgcolor: "rgba(255,255,255,0.04)",
        }}
      >
        {AUDIENCE_OPTIONS.map((option) => {
          const selected = audience === option.value;
          return (
            <Box
              key={option.value}
              component="button"
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setAudience(option.value)}
              sx={{
                cursor: "pointer",
                border: "none",
                px: { xs: 2.25, md: 3 },
                py: 1.1,
                borderRadius: "999px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                lineHeight: 1.2,
                transition: "background-color 0.15s ease, color 0.15s ease",
                color: selected ? "white" : "text.secondary",
                bgcolor: selected ? "primary.main" : "transparent",
                "&:hover": {
                  color: selected ? "white" : "text.primary",
                  bgcolor: selected ? "primary.main" : "rgba(255,255,255,0.06)",
                },
              }}
            >
              {option.label}
            </Box>
          );
        })}
      </Box>

      <Stack spacing={2.5} direction="row" sx={{ justifyContent: { xs: 'start', md: isCorporate ? "start" : "center" }, overflowX: 'scroll', width: '100%', scrollbarWidth: 'none' }}>
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} showCardCta={showCardCta} />
        ))}
      </Stack>

      <Chip sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.secondary' }} label={`${plans.length} ${isCorporate ? 'вариантов' : 'варианта'}`} />
    </Stack>
  );
}
