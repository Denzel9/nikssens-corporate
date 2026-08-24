"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { guideAudienceLabels, getFeaturedGuides } from "@/entities/guide";
import { SectionHeading } from "@/shared/ui";

export function GuidesTeaserSection() {
  const items = getFeaturedGuides();

  return (
    <Box id="guides" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            mb: { xs: 3, md: 4 },
            justifyContent: "space-between",
            alignItems: { md: "flex-end" },
          }}
        >
          <SectionHeading
            title="Сценарии работы"
            description="Сквозные процессы со скринами на шагах — не справочник экранов, а путь от старта до результата."
          />
          <Box
            component={Link}
            href="/guides"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "primary.main",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
              flexShrink: 0,
              "&:hover": { opacity: 0.85 },
            }}
          >
            Все сценарии
            <ArrowForwardRoundedIcon fontSize="small" />
          </Box>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {items.map((guide) => (
            <Box
              key={guide.slug}
              component={Link}
              href={`/guides/${guide.slug}`}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "24px",
                bgcolor: "background.paper",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                textDecoration: "none",
                color: "inherit",
                height: "100%",
                transition: "transform 0.25s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 600, mb: 1 }}>
                {guideAudienceLabels[guide.audience]} · {guide.duration}
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1, lineHeight: 1.35 }}>
                {guide.title}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.6 }}>
                {guide.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
