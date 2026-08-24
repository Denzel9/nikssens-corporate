"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  corporateSeatTiers,
  formatMonthlyPrice,
  pricingPlans,
  type PricingPlan,
} from "@/entities/pricing";
import { GradientButton, OutlinedPillButton } from "@/shared/ui";

type PricingPlanCardsProps = {
  /** Показывать CTA на каждой карточке (страница тарифов). */
  showCardCta?: boolean;
};

function PlanCard({
  plan,
  showCardCta,
  seatTierIndex,
  onSeatTierChange,
}: {
  plan: PricingPlan;
  showCardCta: boolean;
  seatTierIndex: number;
  onSeatTierChange: (index: number) => void;
}) {
  const displayPrice = plan.withSeatSelect
    ? formatMonthlyPrice(corporateSeatTiers[seatTierIndex]?.priceRub ?? 990)
    : plan.price;

  return (
    <Box
      sx={{
        gap: 2.5,
        width: { xs: "100%", md: "100%" },
        minWidth: { xs: "100%", sm: 280 },
        maxWidth: { md: 400 },
        flex: { md: "1 1 0" },
        height: { md: 580 },
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
          {displayPrice}
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

      {plan.withSeatSelect && (
        <TextField
          select
          fullWidth
          size="small"
          label="Менеджеры"
          value={seatTierIndex}
          onChange={(event) => onSeatTierChange(Number(event.target.value))}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              bgcolor: plan.highlighted ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.04)",
            },
            "& .MuiInputLabel-root": {
              color: plan.highlighted ? "text.primary" : "text.secondary",
            },
          }}
        >
          {corporateSeatTiers.map((tier, index) => (
            <MenuItem key={tier.label} value={index}>
              {tier.managers} — {formatMonthlyPrice(tier.priceRub)}
            </MenuItem>
          ))}
        </TextField>
      )}

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

export function PricingPlanCards({ showCardCta = true }: PricingPlanCardsProps) {
  const [seatTierIndex, setSeatTierIndex] = useState(0);

  return (
    <Stack
      spacing={2.5}
      direction={{ xs: "column", md: "row" }}
      sx={{
        justifyContent: "center",
        alignItems: { xs: "stretch", md: "stretch" },
        width: "100%",
      }}
    >
      {pricingPlans.map((plan) => (
        <PlanCard
          key={plan.name}
          plan={plan}
          showCardCta={showCardCta}
          seatTierIndex={seatTierIndex}
          onSeatTierChange={setSeatTierIndex}
        />
      ))}
    </Stack>
  );
}
