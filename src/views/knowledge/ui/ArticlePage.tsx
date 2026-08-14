"use client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { Article } from "@/entities/article";
import { audienceLabels } from "@/entities/article";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

type ArticlePageProps = {
  article: Article;
};

export function ArticlePage({ article }: ArticlePageProps) {
  return (
    <PageShell>
      <PageHero title={article.title} description={article.description} />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack spacing={3}>
          <Box
            component={Link}
            href="/knowledge"
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
            К базе знаний
          </Box>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, alignItems: "center" }}>
            <Typography
              sx={{ color: "primary.main", fontSize: 13, fontWeight: 600 }}
            >
              {article.group === "page" ? `Страница · ${article.navLabel}` : article.category}
            </Typography>
            {article.audience.map((id) => (
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

          <Stack spacing={2.5}>
            {article.sections.map((section) => (
              <Box
                key={section.title}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "24px",
                  bgcolor: "background.paper",
                }}
              >
                <Stack spacing={1.5}>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 20 } }}>
                    {section.title}
                  </Typography>

                  {section.paragraphs.map((paragraph) => (
                    <Typography
                      key={paragraph}
                      sx={{
                        color: "text.secondary",
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <Box
                      component="ul"
                      sx={{
                        m: 0,
                        pl: 2.5,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {section.bullets.map((bullet) => (
                        <Typography
                          key={bullet}
                          component="li"
                          sx={{
                            color: "text.secondary",
                            fontSize: 15,
                            lineHeight: 1.6,
                          }}
                        >
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </PageShell>
  );
}
