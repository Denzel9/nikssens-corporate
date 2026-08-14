"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import type { LegalDocument } from "@/entities/legal";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

type LegalDocumentPageProps = {
  document: LegalDocument;
};

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  return (
    <PageShell>
      <PageHero title={document.title} description={document.description} />
      <Container maxWidth="md" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack spacing={3}>
          <Box
            component={Link}
            href="/"
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
            На главную
          </Box>

          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            Последнее обновление: {document.updatedAt}
          </Typography>

          <Stack spacing={2.5}>
            {document.sections.map((section) => (
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
