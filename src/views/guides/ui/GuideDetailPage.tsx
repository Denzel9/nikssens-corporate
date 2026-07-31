"use client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { getArticleBySlug } from "@/entities/article";
import { guideAudienceLabels, type Guide } from "@/entities/guide";
import { authLink } from "@/shared/config";
import {
  GradientButton,
  GuideStepMediaView,
  OutlinedPillButton,
  PageHero,
} from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

type GuideDetailPageProps = {
  guide: Guide;
};

export function GuideDetailPage({ guide }: GuideDetailPageProps) {
  const related = (guide.relatedKnowledge ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);

  return (
    <PageShell>
      <PageHero title={guide.title} description={guide.description} />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack spacing={4}>
          <Box
            component={Link}
            href="/guides"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              width: "fit-content",
              "&:hover": { opacity: 0.85 },
            }}
          >
            <ArrowBackRoundedIcon fontSize="small" />
            К сценариям
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ flexWrap: "wrap", gap: 1, alignItems: { sm: "center" } }}
          >
            <Box
              sx={{
                px: 1.25,
                py: 0.35,
                borderRadius: 999,
                bgcolor: "rgba(77,144,142,0.18)",
                color: "primary.main",
                fontSize: 12,
                fontWeight: 700,
                width: "fit-content",
              }}
            >
              {guideAudienceLabels[guide.audience]}
            </Box>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              {guide.duration} · {guide.steps.length} шагов
            </Typography>
          </Stack>

          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "24px",
              bgcolor: "background.paper",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 0.75 }}>
              Итог сценария
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.6 }}>
              {guide.outcome}
            </Typography>
          </Box>

          {guide.videoId && (
            <GuideStepMediaView
              media={{ type: "video", youtubeId: guide.videoId }}
              caption="Полный обзор сценария"
            />
          )}

          <Stack spacing={3}>
            {guide.steps.map((step, index) => (
              <Box
                key={step.title}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "32px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 2.5, md: 4 }}
                >
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{ color: "primary.main", fontWeight: 700, fontSize: 13, mb: 1 }}
                    >
                      Шаг {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 22 }, mb: 1.25 }}>
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.7, mb: 1.5 }}
                    >
                      {step.description}
                    </Typography>
                    {step.bullets && step.bullets.length > 0 && (
                      <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                        {step.bullets.map((bullet) => (
                          <Typography
                            key={bullet}
                            component="li"
                            sx={{
                              color: "text.secondary",
                              fontSize: 15,
                              lineHeight: 1.7,
                              mb: 0.5,
                            }}
                          >
                            {bullet}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>

                  {step.media && (
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <GuideStepMediaView media={step.media} caption={step.caption} />
                    </Box>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>

          {related.length > 0 && (
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 2 }}>
                Связанные статьи базы знаний
              </Typography>
              <Stack spacing={1.25}>
                {related.map((article) =>
                  article ? (
                    <Box
                      key={article.slug}
                      component={Link}
                      href={`/knowledge/${article.slug}`}
                      sx={{
                        p: 2,
                        borderRadius: "20px",
                        bgcolor: "background.paper",
                        border: "1px solid rgba(255,255,255,0.08)",
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": { borderColor: "primary.main" },
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                        {article.title}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: 13, mt: 0.5 }}>
                        {article.description}
                      </Typography>
                    </Box>
                  ) : null,
                )}
              </Stack>
            </Box>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <GradientButton href={authLink.href}>Открыть приложение</GradientButton>
            <OutlinedPillButton component={Link} href="/knowledge">
              База знаний
            </OutlinedPillButton>
          </Stack>
        </Stack>
      </Container>
    </PageShell>
  );
}
