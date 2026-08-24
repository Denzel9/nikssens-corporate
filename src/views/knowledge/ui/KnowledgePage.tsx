"use client";

import { useMemo, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Link from "next/link";
import {
  audienceLabels,
  filterArticles,
  getPageArticles,
  getTopicArticles,
  type Article,
  type ArticleAudience,
  type AudienceFilter,
} from "@/entities/article";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

const chips: { id: AudienceFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "brand", label: "Бренд" },
  { id: "creator", label: "Исполнитель" },
  { id: "manager", label: "Менеджер" },
  { id: "agency", label: "Агентство" },
  { id: "prime", label: "Prime" },
];

const AudienceBadges = ({ audience }: { audience: ArticleAudience[] }) => (
  <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", gap: 0.75 }}>
    {audience.map((id) => (
      <Box
        key={id}
        sx={{
          px: 1,
          py: 0.25,
          borderRadius: 999,
          bgcolor: "rgba(77,144,142,0.18)",
          color: "primary.main",
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {audienceLabels[id]}
      </Box>
    ))}
  </Stack>
);

const TopicCard = ({ article }: { article: Article }) => (
  <Box
    component={Link}
    href={`/knowledge/${article.slug}`}
    sx={{
      p: { xs: 3, md: 3.5 },
      borderRadius: "24px",
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
    <Stack spacing={1}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}>
        <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 600 }}>
          {article.category}
        </Typography>
        <AudienceBadges audience={article.audience} />
      </Stack>
      <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 22 } }}>
        {article.title}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.6 }}>
        {article.description}
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

export function KnowledgePage() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState<AudienceFilter>("all");

  const pageArticles = useMemo(
    () => filterArticles(getPageArticles(), { query, audience }),
    [query, audience],
  );
  const topicArticles = useMemo(
    () => filterArticles(getTopicArticles(), { query, audience }),
    [query, audience],
  );
  const empty = pageArticles.length === 0 && topicArticles.length === 0;

  return (
    <PageShell>
      <PageHero
        title="База знаний"
        description="Справочник по экранам и общим темам. Сквозные процессы со скринами — в разделе «Сценарии»."
      />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack spacing={2.5} sx={{ mb: { xs: 4, md: 5 } }}>
          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск по заголовку, описанию и тексту…"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                bgcolor: "background.paper",
              },
            }}
          />
          <Stack direction="row" spacing={1} sx={{ gap: 1, overflowX: "auto", scrollbarWidth: "none" }}>
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
        </Stack>

        {empty ? (
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            Ничего не найдено. Сбросьте фильтр или измените запрос.
          </Typography>
        ) : (
          <Stack spacing={{ xs: 8, md: 12 }}>
            {pageArticles.length > 0 && (
              <Box>
                <Typography sx={{ color: "text.secondary", fontSize: 16, lineHeight: 1.7, mb: 2 }}>
                  Разделы Nikssens: что на экране и как ими пользоваться.
                </Typography>
                <Box
                  sx={{
                    borderRadius: "24px",
                    bgcolor: "background.paper",
                    overflow: "hidden",
                  }}
                >
                  {pageArticles.map((article, index) => (
                    <Box
                      key={article.slug}
                      component={Link}
                      href={`/knowledge/${article.slug}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 2, md: 3 },
                        px: { xs: 2.5, md: 3.5 },
                        py: { xs: 2.25, md: 2.75 },
                        textDecoration: "none",
                        color: "inherit",
                        borderTop: index === 0 ? "none" : "1px solid",
                        borderColor: "rgba(255, 255, 255, 0.12)",
                        transition: "background-color 0.2s ease",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.03)",
                        },
                        "&:hover .knowledge-page-arrow": {
                          opacity: 1,
                          transform: "translateX(0)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontWeight: 700,
                          fontSize: 14,
                          minWidth: 28,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                      <Stack spacing={0.75} sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}>
                          {article.navLabel}
                        </Typography>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: 14,
                            lineHeight: 1.5,
                          }}
                        >
                          {article.description}
                        </Typography>
                        <AudienceBadges audience={article.audience} />
                      </Stack>
                      <ArrowForwardRoundedIcon
                        className="knowledge-page-arrow"
                        sx={{
                          color: "primary.main",
                          opacity: { xs: 1, md: 0.35 },
                          transform: { xs: "none", md: "translateX(-4px)" },
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                          flexShrink: 0,
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {topicArticles.length > 0 && (
              <Box>
                <Stack spacing={1} sx={{ mb: { xs: 3, md: 4 }, maxWidth: 680 }}>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                  >
                    Общие темы
                  </Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: 16, lineHeight: 1.7 }}>
                    Сценарии и ответы, которые не привязаны к одному экрану.
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  {topicArticles.map((article) => (
                    <TopicCard key={article.slug} article={article} />
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
        )}
      </Container>
    </PageShell>
  );
}
