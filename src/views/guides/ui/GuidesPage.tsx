"use client";

import { useMemo, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {
  guideAudienceLabels,
  guides,
  type Guide,
  type GuideAudience,
} from "@/entities/guide";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

type AudienceFilter = "all" | GuideAudience;

const chips: { id: AudienceFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "brand", label: "Бренд" },
  { id: "creator", label: "Исполнитель" },
  { id: "agency", label: "Агентство" },
];

const GuideCard = ({ guide }: { guide: Guide }) => (
  <Box
    component={Link}
    href={`/guides/${guide.slug}`}
    sx={{
      p: { xs: 3, md: 3.5 },
      borderRadius: "32px",
      bgcolor: "background.paper",
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      justifyContent: "space-between",
      gap: 2,
      textDecoration: "none",
      color: "inherit",
      transition: "transform 0.25s ease",
      "&:hover": { transform: "translateY(-2px)" },
    }}
  >
    <Stack spacing={1.25}>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, alignItems: "center" }}>
        <Box
          sx={{
            px: 1.25,
            py: 0.35,
            borderRadius: 999,
            bgcolor: "rgba(77,144,142,0.18)",
            color: "primary.main",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {guideAudienceLabels[guide.audience]}
        </Box>
        <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
          {guide.duration} · {guide.steps.length} шагов
        </Typography>
      </Stack>
      <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 22 } }}>
        {guide.title}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.6 }}>
        {guide.description}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
        Итог: {guide.outcome}
      </Typography>
    </Stack>
    <Box
      sx={{
        alignSelf: { xs: "flex-start", sm: "center" },
        color: "primary.main",
        display: "grid",
        placeItems: "center",
      }}
    >
      <ArrowForwardRoundedIcon />
    </Box>
  </Box>
);

export function GuidesPage() {
  const [audience, setAudience] = useState<AudienceFilter>("all");
  const filtered = useMemo(
    () =>
      audience === "all"
        ? guides
        : guides.filter((guide) => guide.audience === audience),
    [audience],
  );

  return (
    <PageShell>
      <PageHero
        title="Сценарии"
        description="Пошаговые процессы реальной работы в Nikssens: скрины или видео на каждом шаге. База знаний — справочник по экранам; здесь — сквозной путь."
      />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack direction="row" spacing={1} sx={{ mb: 3, gap: 1, overflowX: "auto", scrollbarWidth: "none" }}>
          {chips.map((chip) => {
            const selected = chip.id === audience;

            return (
              <Box
                key={chip.id}
                component="button"
                type="button"
                onClick={() => setAudience(chip.id)}
                sx={{
                  px: 1.75,
                  py: 0.85,
                  borderRadius: 999,
                  border: "1px solid",
                  borderColor: selected ? "primary.main" : "rgba(255,255,255,0.12)",
                  bgcolor: selected ? "primary.main" : "transparent",
                  color: selected ? "#fff" : "text.secondary",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {chip.label}
              </Box>
            );
          })}
        </Stack>

        <Stack spacing={2}>
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </Stack>
      </Container>
    </PageShell>
  );
}
